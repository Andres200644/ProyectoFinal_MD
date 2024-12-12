import ProductDAO from '../dao/ProductDAO.js';
import ProductDTO from '../dto/ProductDTO.js';

class ProductRepository {
  async getAll() {
    const products = await ProductDAO.getAll();
    return products.map(product => new ProductDTO(product));
  }

  async getById(id) {
    const product = await ProductDAO.getById(id);
    if (!product) throw new Error('Producto no encontrado');
    return new ProductDTO(product);
  }

  async create(data) {
    const product = await ProductDAO.create(data);
    return new ProductDTO(product);
  }
}

export default new ProductRepository();
