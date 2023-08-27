import dotenv from 'dotenv';
dotenv.config();

import './src/database';

import express from 'express';
import homeRoutes from './src/routes/homeRoutes';
import userRoutes from './src/routes/userRoutes';
import tokenRoutes from './src/routes/tokenRoutes';
import studentRoutes from './src/routes/studentRoutes';
class App {
  constructor() {
    this.app = express()
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true })); // POST
    this.app.use(express.json());
  }
  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/user/', userRoutes);
    this.app.use('/token/', tokenRoutes);
    this.app.use('/student/', studentRoutes);
  }
}

export default new App().app;
