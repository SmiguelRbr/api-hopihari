const express = require("express");
const router = express.Router();
const usuariosController = require("../controllers/usuarios.controller");


router.post("/cadastrar", usuariosController.cadastraUsuario);
router.put("/:id", usuariosController.atualizarUsuario);


module.exports = router;