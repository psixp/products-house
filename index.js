const express = require('express');
const session = require('express-session');
const methodOverride = require('method-override');
const app = express();
const path = require('path');
const homeRouter = require('./src/routers/homeRouter');
const produtoRouter = require('./src/routers/produtoRouter');
const authRouter = require('./src/routers/authRouter');


app.use(methodOverride('_method'));
app.use(express.static('./src/public'));
app.set('view engine', 'ejs'); 
app.set('views', path.resolve("src", "views"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(session({
    secret: 'Ecommerce',
    resave: false,
    saveUninitialized: true
  }))

app.use(homeRouter);
app.use(authRouter);
app.use(produtoRouter);

app.use((req, res, next) => {
    return res.status(404).render('home/not-found', { error: 'Página não encontrada' });
})  

app.listen(3000, () => console.log('Projeto Rodando...'))