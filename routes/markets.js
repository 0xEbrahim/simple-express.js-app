const { Router } = require('express');
const { getMarkets } = require('../controllers/market')
const router = Router();

router.get('/', getMarkets)

module.exports = router;
