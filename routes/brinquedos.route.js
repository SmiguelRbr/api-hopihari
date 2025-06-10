const express = require("express");
const router = express.Router();
const login = require("../middleware/usuarios.middleware");
const brinquedosController = require('../controllers/brinquedos.controller');

router.post("/", 
    login.required,
    login.userRequired,
    brinquedosController.cadastrarBrinquedo
);

router.get("/area/:areaName", 
    login.required, 
    brinquedosController.getBrinquedosByAreaName
);

module.exports = router;