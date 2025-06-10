const mysql = require("../mysql");

exports.cadastrarBrinquedo = async (req, res) => {
    try {
        const resultados = await mysql.execute(`
                INSERT INTO rides (name, waiting_time, status, area)
                VALUES (?, ?, ?, ?)
            `,[
                req.body.name,
                req.body.waiting_time,
                req.body.status,
                req.body.area
            ]);
        return res.status(201).send({
            "Mensagem": "Brinquedo cadastrado com Sucesso!",
            "resultados": resultados
        })
    } catch (error) {
        return res.status(500).send(error);
    }
}

exports.getBrinquedosByAreaName = async (req, res) => {
    try {
        resultados = await mysql.execute(`
            SELECT * FROM rides WHERE id_areas = (
                SELECT id FROM areas WHERE name = ?
            );
        `, [req.params.areaName]);

        if (resultados.legth == 0) {
            return res.status(404).send({"Mensagem": "Area do parque não Encontrada"});
        }

        return res.status(200).send({
            "Mensagem": "Consulta realizada com Sucesso",
            "resultados": resultados
        })
    } catch (error) {
        return res.status(500).send(error);
    }
}