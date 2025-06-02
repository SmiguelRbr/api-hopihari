const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuarios.controller');

// User routes
router.get('/:id', usuariosController.obterUsuario);
router.put('/atualizar/:id', usuariosController.atualizarUsuario);
router.post('/cadastrar', usuariosController.cadastrarUsuario);
router.delete('/deletar/:id', usuariosController.deletarUsuario);
router.post('/login', usuariosController.loginUsuario);
router.post('/upload-imagem/:id', usuariosController.uploadImagemPerfil);
router.post('/refresh-token', usuariosController.refreshToken);

module.exports = router;