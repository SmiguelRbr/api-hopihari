const express = require ('express');
const router = express.Router()

router.post('/login', ()=>{
    console.log("Rota de Login")
})

router.post('/cadastro', ()=>{
    console.log("Rota de cadastro")
})

router.put('/atualizar', ()=>{
    console.log("Usuario atualizado")
})


module.exports = router