const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req, res) => {
  res.send('CI/CD pipeline is working');
});

// export app for unit tests
const server = app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = { app, server };
