function fibonacci(n) {
    let anterior = 0, proximo = 1;
    if (n === 0 || n === 1) {
        return true;
    }

    while (proximo <= n) {
        let temp = proximo;
        proximo = anterior + proximo;
        anterior = temp;              
        if (proximo === n) {
            return true;
        }
    }

    return false;
}

let numero = 25;
if (fibonacci(numero)) {
    console.log(numero + " Pertence ao Fibonacci.");
} else {
    console.log(numero + " Não pertence ao Fibonacci.");
}
