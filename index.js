const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const path = require('path');

const usuariosRoute = require('./routes/usuarios.route');
const filasRoute = require('./routes/filas.route');
const notificationsRoute = require('./routes/notification.route');
const brinquedosRoute = require('./routes/brinquedos.route');

const app = express();

// Middleware
app.use(cors());
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, PATCH, DELETE');
        return res.status(200).json({});
    }
    next();
});

// Serve static files
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/Uploads', express.static(path.join(__dirname, 'Uploads')));

// Serve HTML pages explicitly
app.get('/dashboard.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
});
app.get('/profile.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'profile.html'));
});

// API Routes
app.use('/usuarios', usuariosRoute);
app.use('/filas', filasRoute);
app.use('/notifications', notificationsRoute);
app.use('/brinquedos', brinquedosRoute);

// Catch-all for unmatched routes
app.use((req, res) => {
    res.status(404).json({ mensagem: 'Rota não encontrada' });
});

module.exports = app;