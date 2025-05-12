const jwt = require("jsonwebtoken");

const JWT_SECRET = 'apenas_um_segredo'; // Deve ser o mesmo usado no controller

exports.required = async (req, res, next) => {
    try {
        if (!req.headers.authorization) {
            return res.status(401).send({ mensagem: "Token não fornecido" });
        }

        const token = req.headers.authorization.split(" ")[1];
        // Usar verify ao invés de decode para validar o token
        const decode = jwt.verify(token, JWT_SECRET);

        // Salvar dados do usuário no request
        req.usuario = decode;
        
        // Chamar next() para continuar a execução
        next();
    } catch (error) {
        return res.status(401).send({ mensagem: "Token inválido" });
    }
};