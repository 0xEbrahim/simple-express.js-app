const { Router } = require('express')
const router = Router();
const {getGroceries,
        addGrocery,
        getSingleGroc,
        addToCart,
        getFromCart
     } = require('../controllers/grocery');

router.get('/' , getGroceries);
router.post('/' , addGrocery);
router.get('/cart', getFromCart)
router.post('/cart/item',addToCart)
router.get('/:id' , getSingleGroc);

module.exports = router;