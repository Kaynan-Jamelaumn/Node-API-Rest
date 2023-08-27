import { Router } from 'express';
import userController from '../controllers/UserController';
const router = new Router();
import loginrequired from '../middlewares/loginrequired';

//router.post('/create/', userController.create);
router.get('/', loginrequired, userController.index);
//router.get('/:id', userController.filterById);
router.put('/update/', loginrequired, userController.update);
router.delete('/delete/', loginrequired, userController.update);
export default router;
