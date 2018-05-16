import { Router } from 'express';
import userController from '../controllers/userController';
import UserMiddleware from '../middlewares/validators/users';

const router = Router();

router.post('/requests', UserMiddleware.validatePostBody, userController.create);
router.get('/requests', userController.getAll);
router.get('/requests/:id', userController.findById);
router.put('/requests/update', UserMiddleware.validatePostBody, userController.updateOne);
router.delete('/requests/:id', userController.deleteOne);
router.get('/request/clear', userController.deleteAll);


export default router;
