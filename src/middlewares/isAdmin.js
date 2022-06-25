const isAdmin = (req, res, next) => {
    const { usuario } = req.session;
    if (usuario.tipoDeUsuario != 'admin') {
        return next()
    }
    return res.redirect('/');
}

module.exports = isAdmin;