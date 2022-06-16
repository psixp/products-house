const express = require('express');
const methodOverride = require('method-override');
const app = express();
const homeRouter = require('./src/routers/homeRouter');
const produtoRouter = require('./src/routers/produtoRouter');

app.use(methodOverride('_method'));
app.use(express.static('./src/public'));
app.set('view engine', 'ejs'); 
app.set('views', './src/views');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(homeRouter);
app.use(produtoRouter);

app.use((req, res, next) => {
    return res.status(404).render('home/not-found', { error: 'Página não encontrada' });
})  

app.listen(3000, () => console.log('Projeto Rodando...'))