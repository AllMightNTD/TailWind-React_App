const express = require('express');
const router = express.Router();

// Gọi Controller => hàm index
const siteControl = require('../app/Controller/Sitecontroller');

router.use('/', siteControl.index);

// Export ra ngoài
module.exports = router;
