const express = require('express');
const cors = require('cors')
const helmet = require('helmet')
const app = express()
const bodyParser = require('body-parser')

const usuariosRoute = require("./routes/usuarios.route")
const filasRoute = require("./routes/filas.route")
const notificationsRoute = require("./routes/notification.route");
const brinquedosRoute = require("./routes/brinquedos.route")


app.use(cors())
app.use(helmet())

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === 'OPTIONS') {
        res.header("Access-Control-Allow-Methods", "PUT, POST, GET, PATCH, DELETE");
        return res.status(200).send({});
    }
    next();
});

app.use("/usuarios", usuariosRoute)
app.use("/filas", filasRoute)
app.use('/notifications', notificationsRoute);
app.use('/brinquedos', brinquedosRoute);

module.exports = app