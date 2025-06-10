const mysql = require('../mysql');

exports.getNotification = async (req, res, next) => {
    try {
        const idUsuario = res.locals.idUsuario; 
        console.log("ID do usuário recebido:", idUsuario);

        const resultado = await mysql.execute(
            `SELECT * FROM notifications WHERE users_id = ?`,
            [res.locals.idUsuario]
        );
        console.log("Resultado da consulta:", resultado);

        if (resultado.length === 0) {
            return res.status(404).send({ "mensagem": "Nenhuma notificação encontrada para este usuário!" });
        }

        return res.status(200).send({ "mensagem": "Notificações encontradas!", "resultado": resultado });
    } catch (error) {
        console.error("Erro no endpoint de notificações:", error);
        return res.status(500).send({ error });
    }
};

exports.updateNotification = async (req, res) => {
    try {
        const resultado = await mysql.execute(
            `UPDATE notifications SET status = 0 WHERE id = ?`,
            [req.params.idnotification]
        );

        if (resultado.affectedRows === 0) {
            return res.status(404).send({ "mensagem": "Nenhuma notificação encontrada para este usuário!" });
        }

        return res.status(200).send({ "mensagem": "Notificação atualizada com sucesso!" });
    } catch (error) {
        return res.status(500).send({ error });
    }
}



//commit