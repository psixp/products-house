const ProdutoModel = require('../models/produtoModel');

const homeController = {
    index: (req, res) => {
        const produtos = ProdutoModel.findAll()
        if (req.session.usuario) {
            res.render('home/landingpage', { produtos, usuario: req.session.usuario
            });
        }
        res.render('home/landingpage', { produtos });
    },
    getCadastro: (req, res) => {
        res.render('home/cadastro');
    },
    getlogin: (req, res) => {
        res.render('home/login');
    },
    viewProduto: (req, res) => {
        const {id} = req.params
        const produto = ProdutoModel.findById(id)

        return res.render('produtos/detalhes', {produto: produto})
    }

}

module.exports = homeController;