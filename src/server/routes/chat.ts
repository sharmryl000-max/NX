import express from 'express';

const router = express.Router();

// Mock database or service layer (to be replaced with actual implementation)

const messages: Array<{ id: number; text: string; sender: string; conversationId: number }> = [];
const conversations: Array<{ id: number; title: string }> = [];

// Get messages for a specific conversation
router.get('/messages', (req, res) => {
    const { conversationId } = req.query;
    const conversationMessages = messages.filter(msg => msg.conversationId === Number(conversationId));
    res.json(conversationMessages);
});

// Send a message to a specific conversation
router.post('/messages', (req, res) => {
    const { text, sender, conversationId } = req.body;
    const newMessage = {
        id: messages.length + 1,
        text,
        sender,
        conversationId
    };
    messages.push(newMessage);
    res.status(201).json(newMessage);
});

// Retrieve conversations
router.get('/conversations', (req, res) => {
    res.json(conversations);
});

export default router;