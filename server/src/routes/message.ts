import { getAllMessages, sendMessage } from '../controllers/message';
import express from 'express';

const router = express.Router();

router.post('/message', sendMessage);
router.get('/messages/:chatId', getAllMessages)

export default router;
