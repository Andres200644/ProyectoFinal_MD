const Cart = require('../models/Cart');
const Product = require('../models/Product');

exports.getCart = async (req, res) => {
  const userId = req.user.id;
  const cart = await Cart.findOne({ user: userId }).populate('items.product');
  res.render('cart', { cart });
};

exports.addToCart = async (req, res) => {
  const { productId, quantity } = req.body;
  const userId = req.user.id;
  let cart = await Cart.findOne({ user: userId });

  if (!cart) {
    cart = new Cart({ user: userId, items: [] });
  }

  const itemIndex = cart.items.findIndex((item) => item.product == productId);
  if (itemIndex > -1) {
    cart.items[itemIndex].quantity += quantity;
  } else {
    cart.items.push({ product: productId, quantity });
  }

  await cart.save();
  res.redirect('/cart');
};

exports.removeFromCart = async (req, res) => {
  const { productId } = req.body;
  const userId = req.user.id;

  const cart = await Cart.findOne({ user: userId });
  cart.items = cart.items.filter((item) => item.product != productId);
  await cart.save();

  res.redirect('/cart');
};
