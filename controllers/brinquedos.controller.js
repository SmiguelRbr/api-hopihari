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