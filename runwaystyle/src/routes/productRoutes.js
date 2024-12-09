const express = require('express');
const { getProducts, addProduct } = require('../controllers/productController');
const { ensureAuth, ensureAdmin } = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/', ensureAuth, getProducts);
router.post('/add', ensureAuth, ensureAdmin, addProduct);

module.exports = router;
