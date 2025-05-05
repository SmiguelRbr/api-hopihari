const mysql = require("../mysql");

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

exports.cadastraUsuario = async (req, res) => {
    try {
        const resultado = await mysql.execute(
            `INSERT INTO users (first_name, last_name, email, password, birth_date, phone)
            VALUES (?, ?, ?, ?, ?, ?)`,
            [
                req.body.first_name, // Fix: Added first_name
                req.body.last_name,  // Fix: Added last_name
                req.body.email,
                req.body.password,
                req.body.birth_date,  // Fix: Added birth_date
                req.body.phone       // Fix: Added phone
            ]
        );

        return res.status(201).send({
            "Mensagem": "Usuario criado com sucesso",
            "Resultado": resultado
        });
    } catch (error) {
        return res.status(500).send({ "Mensagem": error.message });
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
        const resultado = await mysql.execute(
            `SELECT * FROM users WHERE email = ? AND password = ?`,
            [req.body.email, req.body.password]
        );

        if (resultado.length === 0) {
            return res.status(401).send({ "Mensagem": "Email ou senha inválidos" });
        }

        return res.status(200).send({
            "Mensagem": "Login realizado com sucesso",
            "Resultado": resultado
        });
    } catch (error) {
        return res.status(500).send({ "Mensagem": error.message });
    }
};