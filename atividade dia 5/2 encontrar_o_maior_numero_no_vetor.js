const numeros = [2, 3, 4, 7, 16, 96];
let maiorNumero = numeros[0];
for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maiorNumero) {
        maiorNumero = numeros[i];
    posicao = i;
    }
}
console.log("O maior número é:", maiorNumero);
console.log("sua posicao do indice é: ", posicao)
