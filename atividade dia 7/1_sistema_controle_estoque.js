let matrizProduto = [ 
  [ 1 , "Batata" , 10 , 5.00 ], 
  [ 2 , "Cebola" , 20 , 2.50 ], 
  [ 3 , "Arroz"  , 45 , 25.00 ], 
  [ 4 , "Feijão" , 5  , 25.00 ], 
  [ 5 , "Farofa" , 15 , 10.00 ] 
]; 

let aftCode = 6; 

function cadastroProduto() { 

  let nome = prompt("Digite o nome:"); 
  let quan = parseInt(prompt("Digite a quantidade:")); 
  let preco = parseFloat(prompt("Digite o preço:"));  


  matrizProduto.push([aftCode, nome, quan, preco]); 

 
  console.log("Produto: " + nome + " cadastrado com sucesso! (Código: " + aftCode + ")"); 
  
  aftCode++; 
} 

function exibirEstoque() { 
  console.clear(); 
  console.log("=== LISTA DE PRODUTOS EM ESTOQUE ==="); 
  
  for (let row of matrizProduto) { 
   
    console.log("Cód: " + row[0] + " | Nome: " + row[1] + " | Quantidade: " + row[2] + " | Preço R$: " + row[3].toFixed(2)); 
  } 
} 

exibirEstoque();
cadastroProduto();
exibirEstoque();