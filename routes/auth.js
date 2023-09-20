const { Router } = require('express');
const router = Router();
const {login,
        signUp} = require('../controllers/auth')

router.post('/login', login);
router.post('/register',signUp)
module.exports = router;