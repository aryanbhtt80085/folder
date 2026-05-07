const express = require('express');
const app = express();

// Middleware (optional if needed)
app.use(express.json());

// Routes
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

// Export app ONLY (important for testing)
module.exports = app;
