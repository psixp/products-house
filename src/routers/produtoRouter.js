const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');

router.get('/adm/produtos', produtoController.index);
router.get('/adm/produtos/cadastro', produtoController.getCadastro);
router.get('/adm/produtos/:id', produtoController.getProduto);
router.get('/adm/produtos/:id/editar', produtoController.getEditar);


router.post('/adm/produtos', produtoController.postProduto);

router.put('/adm/produtos/:id', produtoController.update);

router.delete('/adm/produtos/:id', produtoController.delete);

module.exports = router;