let numero = Number(prompt("Sua numero: "));
if (numero % 2 == 0 ) {
    status = "Par"  }
else { status = "Impar" }
if (numero == 0 ){
    classificacao = "Zero"
}else if (numero >0 ){
    classificacao = "Positivo"
}else if (numero <0 ){
    classificacao = "Negativo"
}else {
    classificacao = "Nuúmero inválido digite outro número"
}    
console.log(status, classificacao)