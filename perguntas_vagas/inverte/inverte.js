function invertString(s) {
    let invertida = "";
    for (let i = s.length - 1; i >= 0; i--) {
        invertida += s[i];
    }
    return invertida;
}

const texto = "teste string";
console.log(invertString(texto));
