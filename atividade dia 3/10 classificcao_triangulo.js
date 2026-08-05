let lado1 = Number(prompt("Lado 1: "));
let lado2 = Number(prompt("Lado 2: ")); 
let lado3 = Number(prompt("Lado 3: ")); 
let classe ;

if (lado1+lado2>lado3 && lado1+lado3>lado2 && lado2+lado3>lado1){
    if (lado1 == lado2 && lado2 == lado3) {
        classe = "Equilátero";
    } else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
        classe = "Isósceles";
    } else {
        classe = "Escaleno";
    }
}else {
    classe = "Não é um triângulo"
}
    console.log(classe);