const fs = require('fs');

// read .json
fs.readFile('faturamento.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Erro ao ler o arquivo JSON:', err);
        return;
    }

    const faturamento_mensal = JSON.parse(data);
    
    let menor = Infinity; //pega menor maior da lista
    let maior = -Infinity;
    let soma = 0;
    let dias_validos = 0;

    faturamento_mensal.forEach(dia => {
        const valor = dia.valor;
        if (valor > 0) {  // ignora dias sem nenhuma fatura
            if (valor < menor) {
                menor = valor;
            }
            if (valor > maior) {
                maior = valor;
            }
            soma += valor;
            dias_validos++;
        }
    });

    const media = soma / dias_validos;

    
    const dias_acima_media = faturamento_mensal.filter(dia => dia.valor > media).length;

    console.log(`Menor faturamento: R$ ${menor.toFixed(2)}`);
    console.log(`Maior faturamento: R$ ${maior.toFixed(2)}`);
    console.log(`Dias acima da média: ${dias_acima_media}`);
});
