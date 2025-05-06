const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mysql = require('../mysql'); // Supondo que você tenha um módulo para executar queries no MySQL

const JWT_SECRET = 'apenas_um_segredo'; // Substitua por uma chave secreta segura

exports.atualizarUsuario = async (req, res) => {
    try {
        const idUsuario = Number(req.params.id); // Fix: Correctly extract id from params

        const resultado = await mysql.execute(
            `UPDATE users SET first_name = ?, last_name = ?, email = ?, password = ?, phone = ? WHERE id = ?`,
            [
                req.body.first_name,
                req.body.last_name,
                req.body.email,
                req.body.password,
                req.body.phone,
                idUsuario // Fix: Use idUsuario instead of req.params.id
            ]
        );

        return res.status(200).send({
            "Mensagem": "Usuario atualizado com sucesso",
            "Resultado": resultado
        });
    } catch (error) {
        return res.status(500).send({ "Mensagem": error.message });
    }
};

exports.cadastrarUsuario = async (req, res) => {
    try {
        const { nome, email, senha } = req.body;

        // Hash da senha
        const salt = await bcrypt.genSalt(10);
        const senhaHash = await bcrypt.hash(senha, salt);

        // Inserir usuário no banco de dados
        const resultado = await mysql.execute(
            `INSERT INTO users (nome, email, senha) VALUES (?, ?, ?)`,
            [nome, email, senhaHash]
        );

        // Gerar token JWT
        const token = jwt.sign({ id: resultado.insertId, email }, JWT_SECRET, { expiresIn: '1h' });

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
        const usuario = await mysql.execute(
            `SELECT * FROM users WHERE email = ?`,
            [req.body.email]
        );
        console.log(usuario);

        if (usuario.length === 0) {
            return res.status(401).send({ mensagem: "Usuario não cadastrado" });
        }

        const match = await bcrypt.compare(usuario[0].senha, req.body.senha);
        if (!match) {
            return res.status(401).send({ mensagem: "Senha incorreta" });
        }
        console.log(match, req.body.senha, usuario[0].senha);

        const token = jwt.sign({ 
            id: usuario[0].id,
            first_name: usuario[0].first_name,
            last_name: usuario[0].last_name,
            email: usuario[0].email,
            birth_date: usuario[0].birth_date,
            }, "senhadojwt");

        return res.status(200).send({
            "Mensagem": "Usuario autenticado com sucesso", 
            "token": token 
        });

    } catch (error) {
        return res.status(500).send({ mensagem: error.message });
    }
};