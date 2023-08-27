import { Router } from 'express';
import studentController from '../controllers/StudentController';
const router = new Router();
import loginrequired from '../middlewares/loginrequired';

router.get('/', studentController.index);
router.get('/:id', studentController.filterById);
router.get('/create/', loginrequired, studentController.create);
router.put('/update/:id', loginrequired, studentController.update);
router.delete('/delete/:id', loginrequired, studentController.update);
export default router;
