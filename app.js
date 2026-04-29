const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('CI/CD pipeline is working');
});

// ❌ DO NOT call listen here in tests
if (require.main === module) {
  app.listen(3000, () => {
    console.log('Server running on port 3000');
  });
}

module.exports = app;
