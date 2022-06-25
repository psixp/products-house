const bcrypt = require('bcryptjs');
const Usuario = require('../models/usuariosModel');

const authController = {
    showLogin: (req, res) => {
        res.render('home/login');
    },
    showCadastrar: (req, res) => {
        res.render('home/cadastro');
    },

    store: (req, res) => {
        const { nome, email, senha } = req.body;
        const hash = bcrypt.hashSync(senha, 10);
        const verificaSeCadastrado = Usuario.findOne(email)

        if (verificaSeCadastrado) {
            return res.render('home/cadastro', { error: 'Usuário já cadastrado' });
        }

        const usuario = {
            nome,
            email,
            senha: hash
        }

        Usuario.create(usuario);

        return res.redirect('/login');
    },

    login: (req, res) => {
        const { email, senha } = req.body;
        const usuario = Usuario.findOne(email);

        if (!usuario) {
            return res.render('home/login', { error: 'Usuário não cadastrado' });
        }

        if (!bcrypt.compareSync(senha, usuario.senha)) {
            return res.render('home/login', { error: 'Senha incorreta' });
        }

        req.session.usuario = usuario;
        return res.redirect('/');
    }
}

module.exports = authController;