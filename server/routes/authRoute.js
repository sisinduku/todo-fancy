const express = require('express');
const router = express.Router();

const AuthCtrl = require('../controllers/authCtrl');

router.post('/', AuthCtrl.authenticate);

module.exports = router;
