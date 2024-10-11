import express from 'express';
const app = express();

import { buscarHistoricoIPCA, dadosPorAno } from './servico/servico.js';

app.get('/historicoIPCA', (req, res) => {
    const ano = req.query.ano;
    const dados = ano ? dadosPorAno(ano) : buscarHistoricoIPCA();

    res.json(dados);
})

app.listen(8080, () => {
    console.log('Servidor iniciado na porta 8080')
})