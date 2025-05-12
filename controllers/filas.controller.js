const mysql = require('../mysql');

exports.entrarFila = async (req, res) => {
    try{
        const resultado = await mysql.execute(
            `INSERT INTO users_has_atracoes(id_user, id_rides) VALUES (?, ?)`,
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