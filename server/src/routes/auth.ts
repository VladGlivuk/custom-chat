import express from 'express';
import { createUser } from '../controllers/usersController';

const router = express.Router();

router.post('/login', createUser);

export default router;
