import { createUser } from '../controllers/users';
import express from 'express';

const router = express.Router();

router.post('/register', createUser);

export default router;
