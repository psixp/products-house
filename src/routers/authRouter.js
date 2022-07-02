const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/authController');


router.get('/login', AuthController.showLogin);
router.get('/cadastrar', AuthController.showCadastrar);
router.get("/logout", AuthController.logout);

router.post('/login', AuthController.login);
router.post('/cadastrar', AuthController.store);

module.exports = router;
