const express = require('express');
const router = express.Router();
const Groq = require('groq-sdk');

// Initialize Groq client
// NOTE: Ensure GROQ_API_KEY is set in your .env file
const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY || 'dummy_key'
});

router.post('/', async (req, res) => {
    const { message } = req.body;

    if (!message) {
        return res.status(400).json({ error: 'Message is required' });
    }

    try {
        if (!process.env.GROQ_API_KEY) {
            console.warn('GROQ_API_KEY is missing. Returning mock response.');
            // Mock response if API key is missing
            return res.json({
                response: "I'm the James Brown Life Sciences assistant. I can help you with product information, career opportunities, and general inquiries. (Please configure the API Key to enable AI responses)"
            });
        }

        const chatCompletion = await groq.chat.completions.create({
            messages: [
                {
                    role: 'system',
                    content: `You are a helpful and professional customer support assistant for James Brown Life Sciences. 
                    Your goal is to assist users with inquiries about our products (pharmaceuticals, etc.), career opportunities, and general company information. 
                    Be polite, concise, and accurate. If you don't know an answer, suggest they contact support via the Contact page.`
                },
                {
                    role: 'user',
                    content: message
                }
            ],
            model: 'llama-3.3-70b-versatile',
            temperature: 0.7,
            max_tokens: 1024,
        });

        const botResponse = chatCompletion.choices[0]?.message?.content || "I'm sorry, I couldn't generate a response.";
        res.json({ response: botResponse });

    } catch (error) {
        console.error('Error in chat route:', error);
        res.status(500).json({ error: 'Failed to process your request.' });
    }
});

module.exports = router;
