import historicoInflacao from "../data/dados.js";

export const buscarHistoricoIPCA = () => {
    return historicoInflacao;
};

export const dadosPorAno = (ano) => {
    return historicoInflacao.filter((historico) => { 
        return historico.ano === ano
    });
};