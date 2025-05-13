const express = require('express');
const login = require('../middleware/usuario.middleware');
const router = express.Router();
const filaController = require('../controllers/filas.controller');

// Adicionar um controller adequado ao invés de apenas console.log
const filasController = require('../controllers/filas.controller');

router.post('/:idRide', login.required, filasController.entrarFila, filaController.verificarBrinquedo);


module.exports = router;