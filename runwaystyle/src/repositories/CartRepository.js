import Cart from '../models/Cart.js';

class CartRepository {
  async getCartByUserId(userId) {
    return await Cart.findOne({ userId }).populate('products.productId');
  }

  async addProductToCart(userId, productId, quantity) {
    const cart = await Cart.findOne({ userId });

    if (!cart) {
      const newCart = new Cart({
        userId,
        products: [{ productId, quantity }],
      });
      return await newCart.save();
    }

    const existingProduct = cart.products.find(
      (product) => product.productId.toString() === productId
    );

    if (existingProduct) {
      existingProduct.quantity += quantity;
    } else {
      cart.products.push({ productId, quantity });
    }

    return await cart.save();
  }

  async clearCart(userId) {
    return await Cart.findOneAndUpdate({ userId }, { products: [] });
  }
}

export default new CartRepository();
