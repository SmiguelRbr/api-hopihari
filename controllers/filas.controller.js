const mysql = require('../mysql');


//verficar se o idRide existe
exports.verificarBrinquedo = async (req, res) => {
    try{
        const resultado = await mysql.execute(`
            SELECT * FROM rides WHERE id = ?`,
            [req.params.idRide]
        );

        if(resultado.length == 0){
            return res.status(404).send({ mensagem: "Brinquedo não encontrado" });
        }
        next();

    }catch (error) {
        return res.status(500).send({ mensagem: error.message });
    }
}

exports.entrarFila = async (req, res) => {
    try{
        const resultado = await mysql.execute(
            `INSERT INTO \`
            lines\` (users_id, atracoes_id) VALUES (?, ?)`,
            [res.locals.idUsuario, req.params.idRide]
        );
        return res.status(201).send({
            "mensagem": "Usuário entrou na fila com sucesso",
            "resultado": resultado
        });
    }catch (error) {
        return res.status(500).send({ mensagem: error.message });
    }
}