let num1 = Number(prompt("Distância:"));
let num2 = Number(prompt("Velocidade Média:"));
const tempo =  (num1/num2); //aqui regra fixa, constante
const converte = Math.round(tempo); // arredondei o número para ter apenas horas
const minutos = Math.round(((tempo-converte)*60)); // fiz as horas menos tempo anterior para descobrir minutos
console.log("Tempo:" , converte, minutos  )