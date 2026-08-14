let matriz = [];

let linhas = prompt("Digite a quantidade de linhas: ");
let colums = prompt("Digite a quantidade de colunas: ")

    for (let i = 0; i<linhas; i++){
        let linha = []; 
        for (let j = 0; j<colums; j++){
            if( i === j){
                linha.push(1)
            }else{
                linha.push(0)}
        }
    matriz.push(linha) 
};

for (row of matriz){
    let dados = "";
    for (info of row){
    dados+= String(info) + " "
}console.log(dados)
}