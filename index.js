const express = require('express');
const cors = require('cors')
const helmet = require('helmet')
const app = express()
const bodyParser = require('body-parser')

const usuariosRoute = require("./routes/usuarios.route")


app.use(cors())
app.use(helmet())

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use((req, res, next)=>{
    res.header("Acces-Control-Allow-Origin", "*")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    )
    if(req.method === 'OPTIONS'){
        res.header("Access-Control-Allow-Methods", "PUT, POST, GET, PATCH, DELETE");

    }
    next()
})

app.use("/usuarios", usuariosRoute)

module.exports = app