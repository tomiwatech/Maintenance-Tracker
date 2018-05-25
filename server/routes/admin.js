import { Router } from 'express';
import adminController from '../controllers/adminController';
import adminMiddleware from '../middlewares/validators/admin';

const router = Router();

router.get('/', adminMiddleware.verifyToken, adminController.getAll);
router.put('/:id/approve', adminMiddleware.verifyToken, adminController.approveOne);
router.put('/:id/disapprove', adminMiddleware.verifyToken, adminController.disapproveOne);
router.put('/:id/resolve', adminMiddleware.verifyToken, adminController.resolveOne);

export default router;
