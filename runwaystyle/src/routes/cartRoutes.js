const express = require('express');
const { getCart, addToCart, removeFromCart } = require('../controllers/cartController');
const { ensureAuth } = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/', ensureAuth, getCart);
router.post('/add', ensureAuth, addToCart);
router.post('/remove', ensureAuth, removeFromCart);

module.exports = router;
