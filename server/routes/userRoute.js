import userController from "../controllers/userController.js";
import express from 'express';
import cors from 'cors';
import authMiddleware from "../utils/authMiddleware.js";

const router = express.Router();

router.use(cors());

router.get('/', authMiddleware.authenticateToken, userController.getNewUser);

export default router;