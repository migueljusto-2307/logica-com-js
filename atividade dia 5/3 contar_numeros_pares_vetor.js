let meuVetor = [];
let pares = [];
for (let i = 0; i < 8; i++) {
    let num = Number(prompt("Digite um número:"));
    meuVetor.push(num);
}
for (let i = 0; i < meuVetor.length; i++) {
    if (meuVetor[i] % 2 === 0) {
        pares.push(meuVetor[i]);
    }
}
console.log("Todos os números digitados: ", meuVetor);
console.log("Apenas os números pares: ", pares);