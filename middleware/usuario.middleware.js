const jwt = require("jsonwebtoken");

const JWT_SECRET = 'apenas_um_segredo'; // Deve ser o mesmo usado no controller

exports.required = async (req, res, next) => {
    try {
        if (!req.headers.authorization) {
            return res.status(401).send({ mensagem: "Token não fornecido" });
        }

        const token = req.headers.authorization.split(" ")[1];
        const decode = jwt.verify(token, JWT_SECRET);

        // Salvar o ID do usuário no res.locals
        res.locals.idUsuario = decode.id;

        next();
    } catch (error) {
        return res.status(401).send({ mensagem: "Falha na autenticação", error: error.message });
    }
};