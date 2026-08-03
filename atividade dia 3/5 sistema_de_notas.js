let nota = Number(prompt("Nota: "));
if (nota>=7 ) {
    classificacao = "Aprovado"  
}else if (nota>=5.0 && nota<=6.9){
    classificacao = "Recuperação"
}else if (nota<5.0){
    classificacao = "Reprovado"
}
console.log( classificacao)