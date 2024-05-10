import express from 'express';
import loginController from '../controllers/loginController.js';
import cors from 'cors';

const router = express.Router();
router.use(cors());

router.post('/login',loginController.login);
router.post('/refresh-token',loginController.refreshTokenLogin);
 

export default router;
