// backend/server.js
const express = require('express');
const cors = require('cors');  // Import the cors package
const app = express();
const port = 5000;

app.use(cors());  // Enable CORS for all origins
app.use(express.json());  // Parse JSON request bodies

// Define a simple route
app.get('/', (req, res) => {
    res.send('Welcome to TechServicesMarket Backend');
});

// Routes for your API (e.g., services route)
const servicesRouter = require('./routes/services');
app.use('/api', servicesRouter);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
