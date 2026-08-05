const senha = 1234;
let senhaDig;
while (senhaDig !== senha) {
    senhaDigitada = Number(prompt("Digite sua senha: "));
    if (senhaDig !== senha) {
        alert("Senha incorreta tente novamente");
    }
}
console.log("Acesso permitido");