let usuario = prompt("Usuário: "); 
let senha = Number(prompt("Senha: ")); 
let classificacao;
if (usuario === "admin" && senha === 1234) {
    classificacao = "Acesso Permitido";
} else {
    classificacao = "Acesso Negado";
}
console.log(classificacao);