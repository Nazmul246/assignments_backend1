const express = require('express');
const { helloWorld } = require('../controllers/helloController');
const router = express.Router();

router.get('/hello', helloWorld);

module.exports = router;
