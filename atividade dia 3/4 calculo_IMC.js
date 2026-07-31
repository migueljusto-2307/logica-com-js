let peso = Number(prompt("Peso: "));
let altura = Number(prompt("Altura: "));
console.log ("IMC: ",imc = peso / (altura*altura))
if (imc<=18.5 ) {
    classificacao = "Baixo Peso"  
}else if (imc>=18.5, imc <24.9  ){
    classificacao = "Peso Normal"
}else if (imc>=25.0, imc<=29.9  ){
    classificacao = "Sobrepeso"
}else if (imc>=30.0, imc<=34.9  ){
    classificacao = "Obesidade Grau 1"
}else if (imc>=35.0, imc<39.9){
    classificacao = "Obesidade Grau 2"
}else if (imc>=40)
    classificacao = "Obesidade Grave"
console.log( classificacao, imc)