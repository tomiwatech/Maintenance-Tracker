import { Router } from 'express';
import authController from '../controllers/authController';
import authMiddleware from '../middlewares/validators/auth';

const router = Router();

router.post('/signup', authMiddleware.validateSignup, authController.signup);
router.get('/all', authController.getAll);
router.post('/login', authMiddleware.validateLogin, authController.login);


export default router;
