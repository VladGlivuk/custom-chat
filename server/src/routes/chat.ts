
import { createChat, fetchChats } from '../controllers/chat';
import express from 'express';

const router = express.Router();

router.post('/chat', createChat);
router.get('/chats', fetchChats)

export default router;
