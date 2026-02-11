const router = require('express').Router();
const Contact = require('../models/Contact');

// POST /api/contact
router.post('/', async (req, res) => {
    try {
        const { name, email, message } = req.body;
        console.log('📩 New Contact Form Submission:', req.body);

        // Basic Validation
        if (!name || !email || !message) {
            return res.status(400).json({ error: 'Please provide all fields' });
        }

        const newContact = new Contact({ name, email, message });
        const savedContact = await newContact.save();

        res.status(201).json(savedContact);
    } catch (err) {
        res.status(500).json({ error: 'Server Error' });
    }
});

module.exports = router;
