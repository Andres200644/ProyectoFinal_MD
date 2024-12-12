import express from 'express';
import { getProducts, getProductById, createProduct } from '../controllers/productController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';
import { roleMiddleware } from '../middlewares/roleMiddleware.js';

const router = express.Router();

router.get('/', getProducts);
router.get('/:id', getProductById);
router.post('/', authMiddleware, roleMiddleware('admin'), createProduct);

export default router;
