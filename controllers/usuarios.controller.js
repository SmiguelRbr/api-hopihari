const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mysql = require('../mysql'); // Supondo que você tenha um módulo para executar queries no MySQL

const JWT_SECRET = 'apenas_um_segredo'; // Substitua por uma chave secreta segura

exports.atualizarUsuario = async (req, res) => {
    try {
        const idUsuario = Number(req.params.id);
        
        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const senhaHash = await bcrypt.hash(req.body.password, salt);

        const resultado = await mysql.execute(
            `UPDATE users SET first_name = ?, last_name = ?, email = ?, password = ?, phone = ? WHERE id = ?`,
            [
                req.body.first_name,
                req.body.last_name,
                req.body.email,
                senhaHash,
                req.body.phone,
                idUsuario
            ]
        );

        return res.status(200).send({
            "mensagem": "Usuario atualizado com sucesso",
            "resultado": resultado
        });
    } catch (error) {
        return res.status(500).send({ "mensagem": error.message });
    }
};

exports.cadastrarUsuario = async (req, res) => {
    try {
        const { first_name, last_name, email, password, birth_date, phone } = req.body;

        // Validate required fields
        if (!first_name || !last_name || !email || !password || !birth_date) {
            return res.status(400).send({ 
                mensagem: "Campos obrigatórios: first_name, last_name, email, password, birth_date" 
            });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const senhaHash = await bcrypt.hash(password, salt);

        // Insert user into database
        const resultado = await mysql.execute(
            `INSERT INTO users (first_name, last_name, email, password, birth_date, phone) 
             VALUES (?, ?, ?, ?, ?, ?)`,
            [first_name, last_name, email, senhaHash, birth_date, phone]
        );

        // Generate JWT token
        const token = jwt.sign({ 
            id: resultado.insertId,
            first_name,
            last_name,
            email,
            birth_date
        }, JWT_SECRET, { expiresIn: '1h' });

        return res.status(201).send({
            mensagem: "Usuário criado com sucesso",
            token: token
        });
    } catch (error) {
        return res.status(500).send({ mensagem: error.message });
    }
};
exports.deletarUsuario = async (req, res) => {
    try {
        const idUsuario = Number(req.params.id); // Fix: Correctly extract id from params

        const resultado = await mysql.execute(
            `DELETE FROM users WHERE id = ?`,
            [idUsuario]
        );

        return res.status(200).send({
            "Mensagem": "Usuario deletado com sucesso",
            "Resultado": resultado
        });
    } catch (error) {
        return res.status(500).send({ "Mensagem": error.message });
    }
};

exports.loginUsuario = async (req, res) => {
    try {
        // Mudança de 'senha' para 'password' para manter consistência
        const { email, password } = req.body;

        const [usuario] = await mysql.execute(
            `SELECT * FROM users WHERE email = ?`,
            [email]
        );

        if (!usuario) {
            return res.status(401).send({ mensagem: "Usuario não cadastrado" });
        }

        // Mudança de usuario.senha para usuario.password
        const match = await bcrypt.compare(password, usuario.password);
        if (!match) {
            return res.status(401).send({ mensagem: "Senha incorreta" });
        }

        const token = jwt.sign({ 
            id: usuario.id,
            first_name: usuario.first_name,
            last_name: usuario.last_name,
            email: usuario.email,
            birth_date: usuario.birth_date,
        }, JWT_SECRET);

        return res.status(200).send({
            mensagem: "Usuario autenticado com sucesso", 
            token: token 
        });
    } catch (error) {
        return res.status(500).send({ mensagem: error.message });
    }
};
