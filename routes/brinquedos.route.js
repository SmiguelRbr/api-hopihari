const express = require("express");
const router = express.Router();
const login = require("../middleware/usuario.middleware");
const brinquedosController = require("../controllers/brinquedos.controller");
const usuariosController = require("../controllers/usuarios.controller"); // Importar userRequired

// Rota para cadastrar um brinquedo
router.post('/', 
    login.required, 
    usuariosController.userRequired, // Corrigir referência para userRequired
    brinquedosController.cadastrarBrinquedo
);

router.get('/area/:areaName', 
    login.required, 
    brinquedosController.getBrinquedosPorArea
);
module.exports = router;