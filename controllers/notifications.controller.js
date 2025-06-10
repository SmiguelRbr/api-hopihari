const mysql = require("../mysql");

exports.getNotifications = async (req, res) => {
    try {
        const resultados = await mysql.execute(`
                SELECT * 
                  FROM notifications
                 WHERE id_user = ? 
                   AND status  = TRUE;
            `,
            [res.locals.idUsuario]);
        return res.status(200).send({"Resultados": resultados});
    } catch (error) {
        return res.status(500).send(error);
    }
}