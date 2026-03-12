const express = require('express');
const { createorder } = require('../config/controlers/ordercontrol');
const router =express.Router();

router.route('/order').post(createorder);

module.exports= router;