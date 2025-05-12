const express = require("express");
const router = express.Router();
const usuariosController = require("../controllers/usuarios.controller");


router.put("/atualizar/:id", usuariosController.atualizarUsuario);
router.post("/cadastrar", usuariosController.cadastrarUsuario);
router.delete("/deletar/:id", usuariosController.deletarUsuario);
router.post("/login", usuariosController.loginUsuario);


module.exports = router;