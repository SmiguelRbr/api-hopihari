const jwt = require("jsonwebtoken");

exports.required = async (req, res, next) => {
    try {
        res.locals.idUsuario = 0;

        const token = req.headers.authorization.split(" ")[1];
        const decode = jwt.verify(token, "senhajwt"); // Use verify para validar o token

        console.log("Token decodificado:", decode);

        if (decode.id) {
            res.locals.idUsuario = decode.id;
            console.log("ID do usuário extraído:", res.locals.idUsuario);
            next();
        } else {
            return res.status(401).send({ "mensagem": "Usuário não autenticado!" });
        }
    } catch (error) {
        console.error("Erro no middleware de autenticação:", error);
        return res.status(500).send({ error });
    }
};


exports.userRequeriment = async (req, res, next) => {
    try{
        if (res.locals.admin){
            return res.status(403).send({
                "Mensagem": "Usuario sem permissão"

            });
    }
    next();
    }catch (error) {
        return res.status(500).send({ 
            "error": error
         });
    }
}