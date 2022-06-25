const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

router.get('/', homeController.index);
router.get('/produtos/:id', homeController.viewProduto);
router.get('/carrinho', homeController.getCarrinho);

module.exports = router;