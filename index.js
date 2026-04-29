const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('CI/CD pipeline is working!');
});

// export app for testing
module.exports = app;

// start server only when run directly
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}
