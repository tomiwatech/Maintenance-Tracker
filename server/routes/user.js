import { Router } from 'express';
import userController from '../controllers/userController';
// import validateController from '../middlewares/validators/users';

const router = Router();

router.post('/requests', userController.create);
router.get('/requests', userController.getAll);
router.get('/requests/:id', userController.findById);
router.post('/requests/update', userController.updateOne);
router.delete('/requests/:requestId', userController.deleteOne);
router.get('/request/clear', userController.deleteAll);


export default router;
