import { Router } from 'express';
import userController from '../controllers/UserController';
const router = new Router();


router.post('/create/', userController.create);
router.get('/', userController.index);
router.get('/:id', userController.filterById);
router.put('/update/:id', userController.update);
router.delete('/delete/:id', userController.update);
export default router;
