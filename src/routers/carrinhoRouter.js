const express = require('express');
const router = express.Router();
const CarrinhoController = require('../controllers/carrinhoController');
const isLogin = require('../middlewares/isLogin');

router.use(isLogin)
router.get('/carrinho', CarrinhoController.showCarrinho);

router.post('/carrinho/adicionar', CarrinhoController.addCarrinho);
router.delete('/carrinho/:id/remover', CarrinhoController.removeCarrinho);

module.exports = router;