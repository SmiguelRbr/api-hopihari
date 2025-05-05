const mysql = require("../mysql");

exports.atualizarUsuario = async (req, res) => {
    try {
        const idUsuario = Number(req.params.id); // Fix: Correctly extract id from params

        const resultado = await mysql.execute(
            `UPDATE users
            SET name = ?,
                email = ?,
                password = ?
            WHERE id = ?;`,
            [
                req.body.name,
                req.body.email,
                req.body.password,
                idUsuario
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
            `INSERT INTO users (name, email, password)
            VALUES (?, ?, ?)`,
            [req.body.name, req.body.email, req.body.password]
        );

        return res.status(201).send({
            "Mensagem": "Usuario criado com sucesso",
            "Resultado": resultado
        });
    } catch (error) {
        return res.status(500).send({ "Mensagem": error.message });
    }
};