import { createUser } from '../controllers/usersController';
import express from 'express';

const router = express.Router();

router.post('/login', createUser);

export default router;
