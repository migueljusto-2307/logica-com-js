let pri= Number(prompt("Primeiro Número: "));
let seg = Number(prompt("Segundo Número: "))
let ope = String(prompt("Escolha a Operação, Soma, Subtração, Multiplicação: "))
if ("Soma" == ope || "soma" == ope){
    console.log("Soma: ", pri+seg);
} else if  ("Subtração" == ope || "subtracao" == ope){
    console.log("Subtração: ", pri-seg);
} else if ("Multiplicação" == ope || "multiplicacao" == ope){
    console.log("Multiplicação: ", pri*seg);
} else if ("Divisão" == ope || "divisao" == ope){
    console.log("Divisão: ", pri/seg);
} else 
    console.log("Unidade não disponível ou errada");
