const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('CI/CD pipeline is working!');
});

// IMPORTANT: export app only
module.exports = app;

// start server ONLY if not in test mode
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}
