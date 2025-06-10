const mysql = require("../mysql");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.atualizarUsuario = async (req, res) => {
    try {
        const resultado = await mysql.execute(
            `UPDATE users 
                SET first_name = ?,
                    last_name  = ?,
                    phone      = ?,
                    birth_date = ?,
                    email      = ?
              WHERE id		   = ?;`,
            [
                req.body.first_name,
                req.body.last_name,
                req.body.phone,
                req.body.birth_date,
                req.body.email,
                res.locals.idUsuario
            ]
        );
        return res.status(201).send({
            "Mensagem": "Usuario atualizado com Sucesso",
            "Resultado": resultado
        });
    } catch (error) {
        return res.status(500).send(error);
    }
}

exports.cadastrarUsuario = async (req, res) => {
    try {
        const hash = await bcrypt.hash(req.body.password, 10);
        const resultado = await mysql.execute(`
            INSERT INTO users (
                first_name, 
                last_name, 
                email, 
                password, 
                birth_date, 
                phone
            )
            VALUES (?, ?, ?, ?, ?, ?);`, [
            req.body.first_name,
            req.body.last_name,
            req.body.email,
            hash,
            req.body.birth_date,
            req.body.phone
        ]);
        return res.status(201).send({
            "Mensagem": "Usuario cadastrado com Sucesso",
            "Resultado": resultado
        });
    } catch (error) {
        return res.status(500).send(error)
    }
}

exports.login = async (req, res) => {
    try {
        const usuario = await mysql.execute(
            `SELECT * FROM users WHERE email = ?`,
            [req.body.email]);

        if (usuario.length == 0) {
            return res.status(401).send({"Mensagem": "Usuario não cadastrado"});
        }

        const match = await bcrypt.compare(req.body.password, usuario[0].password);
        if (!match) {
            return res.status(401).send({"Mensagem": "Senha incorreta!"})
        }

        const token = jwt.sign({
            id: usuario[0].id,
            first_name: usuario[0].first_name,
            last_name: usuario[0].last_name,
            email: usuario[0].email,
            birth_date: usuario[0].birth_date,
            phone: usuario[0].phone,
            admin: usuario[0].admin
        }, "senhadojwt");

        return res.status(200).send({
            "Mensagem": "Usuario autenticado com Sucesso",
            "token": token,
            "user": {
                "firstName": usuario[0].first_name,
                "lastName": usuario[0].last_name,
                "email": usuario[0].email,
                "birthDate": usuario[0].birth_date,
                "phone": usuario[0].phone
            }
        });


    } catch (error) {
        return res.status(500).send(error)
    }
}