const jwt = require("jsonwebtoken");

const JWT_SECRET = 'apenas_um_segredo'; // Deve ser o mesmo usado no controller

exports.required = async (req, res, next) => {
    try {
        res.locals.idUsuario = 0;
        res.locals.admin = 0;

        const token = req.headers.authorization.split(" ")[1];
        const decode = jwt.verify(token, JWT_SECRET); // Use jwt.verify para validar o token

        if (decode.id) {
            res.locals.idUsuario = decode.id;
            res.locals.admin = decode.admin;
            next();
        } else {
            return res.status(401).send({ mensagem: "Falha na autenticação" });
        }
    } catch (error) {
        return res.status(401).send({ mensagem: "Falha na autenticação", error: error.message });
    }
};