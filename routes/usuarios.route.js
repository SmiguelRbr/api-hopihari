const express = require("express");
const router = express.Router();
const usuariosController = require("../controllers/usuarios.controller");


router.put("/atualizar/:id", usuariosController.atualizarUsuario);
router.post("/cadastrar", usuariosController.cadastraUsuario);
router.delete("/deletar/:id", usuariosController.deletarUsuario);
router.get("/login", usuariosController.loginUsuario);


module.exports = router;