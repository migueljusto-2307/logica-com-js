let meu_vetor = [];
for (let i = 0; i < 5; i++) {
    let entrada = prompt(`Digite o ${i + 1}° número: `);
    meu_vetor.push(Number(entrada));
}
let somaTotal = 0;
for (let numeroAtual of meu_vetor) {
    somaTotal += numeroAtual; 
}
console.log("Soma total:", somaTotal);