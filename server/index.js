const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error(err));

// Routes (Placeholder)
app.get('/', (req, res) => {
    res.send('API is running...');
});

// Import Routes
app.use('/api/contact', require('./routes/contact'));
app.use('/api/careers', require('./routes/career'));
app.use('/api/chat', require('./routes/chat')); // Chat route

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Server Error' });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
