// In server/routes/categoryRoutes.js
const express = require('express');
const router = express.Router();

// Add your routes here
router.get('/', (req, res) => {
  res.send('Categories route working');
});

module.exports = router;