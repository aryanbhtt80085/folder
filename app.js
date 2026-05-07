const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Environment variables (important for CI/CD)
const PORT = process.env.PORT || 3000;
const BASE_URL = process.env.BASE_URL || `http://localhost:${PORT}`;

// Health check (used in Jenkins integration test)
app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'UP',
        message: 'Service is healthy',
        timestamp: new Date().toISOString()
    });
});

// Sample root route
app.get('/', (req, res) => {
    res.status(200).send('🚀 Folder App is running successfully');
});

// Example API route (safe pattern for future scaling)
app.get('/api/info', (req, res) => {
    res.json({
        app: 'folder-app',
        version: '1.0.0',
        baseUrl: BASE_URL,
        environment: process.env.NODE_ENV || 'development'
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
    console.log(`🌍 Base URL: ${BASE_URL}`);
});
