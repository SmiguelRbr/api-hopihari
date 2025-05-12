const express = require('express');
const login = require('../middleware/usuario.middleware');
const router = express.Router();

// Adicionar um controller adequado ao invés de apenas console.log
const filasController = require('../controllers/filas.controller');

router.post('/', login.required, filasController.entrarFila);
// Adicionar outras rotas conforme necessário

module.exports = router;