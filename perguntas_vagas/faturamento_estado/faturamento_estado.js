const faturamento = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};

const total = Object.values(faturamento).reduce((sum, value) => sum + value, 0);

for (const [estado, valor] of Object.entries(faturamento)) {
    const percentual = (valor / total) * 100;
    console.log(`${estado}: ${percentual.toFixed(2)}%`);
}
