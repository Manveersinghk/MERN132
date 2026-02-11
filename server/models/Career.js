const mongoose = require('mongoose');

const careerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    message: {
        type: String,
    },
    resumeLink: {
        type: String, // Just a link for MVP
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Career', careerSchema);
