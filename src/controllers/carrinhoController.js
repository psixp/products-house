const CarrinhoController = {

    showCarrinho: (req, res) => {
        const { carrinho } = req.session;
        let total = 0;

        if (!carrinho) {
            return res.render('home/carrinho', {
                carrinho: [], total
            })
        }

        carrinho.forEach(produto => {
            total += parseFloat(produto.preco);
        })
        return res.render('home/carrinho', { carrinho, total });
    },

    addCarrinho: (req, res) => {
        const { productId, nome, preco, imagem } = req.body

        const produto = { id: productId, nome, preco, imagem }

        if (req.session.carrinho) {
            req.session.carrinho.push(produto)
        } else {
            req.session.carrinho = [produto]
        }

        return res.redirect('/carrinho')
    },

    removeCarrinho: (req, res) => {
        const { id } = req.params
        const { carrinho } = req.session

        const index = carrinho.findIndex(produto => produto.id === id)

        const carrinhoAtualizado = carrinho.splice(index, 1) // 1 quantidade que vai deletar
        carrinho = carrinhoAtualizado

        if (carrinho.length <= 0) {
            carrinho = []
            return res.redirect('/carrinho')
        }

        return res.redirect('/carrinho')

    }

}

module.exports = CarrinhoController;