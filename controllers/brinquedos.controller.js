const mysql = require('../mysql');

exports.cadastrarBrinquedo = async (req, res) => {
    try {
        const resultado = await mysql.execute(
            `INSERT INTO atracoes (nome, tempo_espera, status, area) VALUES (?, ?, ?, ?)`,
            [
                req.body.nome,          // Corrigido para 'nome'
                req.body.tempo_espera,  // Corrigido para 'tempo_espera'
                req.body.status,
                req.body.area
            ]
        );
        return res.status(201).send({
            mensagem: "Brinquedo cadastrado com sucesso",
            resultado: resultado
        });
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
}

exports.getBrinquedosPorArea = async (req, res) => {
    try {
        console.log("Parâmetro recebido:", req.params.areaName); // Log do parâmetro recebido

        const resultados = await mysql.execute(
            `SELECT * FROM atracoes WHERE area_id = (
                SELECT id FROM area WHERE nome = ?
            )`,
            [req.params.areaName]
        );

        console.log("Resultados da consulta:", resultados); // Log dos resultados

        if (resultados.length === 0) {
            return res.status(404).send({
                mensagem: "Nenhum brinquedo encontrado para esta área"
            });
        }

        return res.status(200).send({
            mensagem: "Brinquedos encontrados com sucesso",
            brinquedos: resultados,
        });

    } catch (error) {
        console.error("Erro no controlador:", error.message); // Log do erro
        return res.status(500).send({ mensagem: error.message });
    }
};