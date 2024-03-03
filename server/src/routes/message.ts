import { createMessage, fetchMessages } from '../controllers/message';
import express from 'express';

const router = express.Router();

router.post('/message', createMessage);
router.get('/messages', fetchMessages)

export default router;
