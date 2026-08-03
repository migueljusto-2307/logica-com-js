let valor = Number(prompt("Preço: "));
let classificacao;
let valorFinal;

if (valor <= 100) {
    classificacao = "Sem Desconto";
    valorFinal = valor; 
} else if (valor < 500) {
    classificacao = "Desconto 10%";
    valorFinal = valor * 0.90;
} else {
    classificacao = "Desconto 20%";
    valorFinal = valor * 0.80; 
}
console.log( classificacao);
console.log("Valor Final com Desconto: R$", valorFinal);