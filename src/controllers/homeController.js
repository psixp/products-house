const ProdutoModel = require('../models/produtoModel');

const homeController = {
    index: (req, res) => {
        const produtos = ProdutoModel.findAll()
        res.render('home/landingpage', { produtos: produtos });
    },
    viewProduto: (req, res) => {
        const {id} = req.params
        const produto = ProdutoModel.findById(id)

        return res.render('produtos/detalhes', {produto: produto})
    }

}

module.exports = homeController;