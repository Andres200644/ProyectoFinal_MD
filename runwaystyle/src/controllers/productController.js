import ProductRepository from '../repositories/ProductRepository.js';

export const getProducts = async (req, res) => {
  try {
    const products = await ProductRepository.getAll();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await ProductRepository.getById(req.params.id);
    res.json(product);
  } catch (error) {
    res.status(404).json({ error: 'Producto no encontrado' });
  }
};

export const createProduct = async (req, res) => {
  try {
    const product = await ProductRepository.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
