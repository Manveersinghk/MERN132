const router = require('express').Router();
const Career = require('../models/Career');

// POST /api/careers
router.post('/', async (req, res) => {
    try {
        const { name, email, message, resumeLink } = req.body;
        console.log('💼 New Career Application:', req.body);

        // Basic Validation
        if (!name || !email) {
            return res.status(400).json({ error: 'Please provide name and email' });
        }

        const newApplication = new Career({ name, email, message, resumeLink });
        const savedApplication = await newApplication.save();

        res.status(201).json(savedApplication);
    } catch (err) {
        res.status(500).json({ error: 'Server Error' });
    }
});

module.exports = router;
