let matriz = [];

for (let i=0;i<3; i++){
    let linha = [];
    let soma = 0;
    for (let j=0;j<3;j++){   
       linha.push(Number(prompt("Digite seu numero: ")));
    }
    matriz.push(linha);
}

for (prop of matriz){
    let info = "";
    info+= String(prop)
    console.log(info)
}