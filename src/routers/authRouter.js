const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');


router.get('/login', authController.showLogin);
router.get('/cadastrar', authController.showCadastrar);

router.post('/login', authController.login);
router.post('/cadastrar', authController.store);

module.exports = router;
