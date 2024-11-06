// backend/routes/services.js
const express = require('express');
const router = express.Router();

// Mock data for services
const services = [
    { id: 1, name: 'Web Development', description: 'Build modern websites' },
    { id: 2, name: 'Mobile Development', description: 'Create mobile apps' }
];

router.get('/services', (req, res) => {
    res.json(services);
});

module.exports = router;
