const ProdutoModel = require('../models/produtoModel');

const produtoController = {
    index: (req, res) => {
        const produtos = ProdutoModel.findAll()
        return res.render('adm/produtos/lista', {produtos: produtos});
    },
    getCadastro: (req, res) => {
        
        return res.render('adm/produtos/cadastro');
    },
    postProduto: (req, res) => {
        const {nome, imagem, preco, ativo, descricao } = req.body;

        const produto = {
            nome,
            imagem,
            preco,
            descricao,
            ativo: (ativo ? true : false)
        }

        ProdutoModel.save(produto);

        return res.redirect('/adm/produtos');
    },
    getProduto: (req, res) => {
        const {id} = req.params
        const produto = ProdutoModel.findById(id)
       
        return res.render('adm/produtos/detalhes', {produto: produto})
    },
    getEditar: (req, res) => {
        const {id} = req.params
        const produto = ProdutoModel.findById(id)

        return res.render('adm/produtos/editar', {produto: produto})
    },
    update: (req, res) => {
        const {id} = req.params
        const {nome, imagem, preco, ativo, descricao } = req.body;

        const produto = {
            id,
            nome,
            imagem,
            preco,
            descricao,
            ativo: (ativo ? true : false)
        }

        ProdutoModel.update(id, produto);

        return res.redirect('/adm/produtos');
    },
    delete: (req, res) => {
        const {id} = req.params
        ProdutoModel.delete(id);

        return res.redirect('/adm/produtos');
    }
}

module.exports = produtoController;