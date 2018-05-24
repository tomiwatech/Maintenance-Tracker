import { Router } from 'express';
import requestController from '../controllers/requestController';
import requestMiddleware from '../middlewares/validators/request';

const router = Router();

router.post('/requests', requestMiddleware.verifyToken, requestMiddleware.validatePostBody, requestController.create);
router.get('/requests', requestMiddleware.verifyToken, requestController.getAll);
router.get('/requests/:id', requestMiddleware.verifyToken, requestController.findOne);
router.put('/requests/:id', requestMiddleware.verifyToken, requestMiddleware.validatePostBody, requestController.updateOne);
router.delete('/requests/:id', requestMiddleware.verifyToken, requestController.deleteOne);
// router.get('/request/clear', requestMiddleware.verifyToken, requestController.deleteAll);


export default router;
