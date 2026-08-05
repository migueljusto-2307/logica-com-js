let ini = Number(prompt("Início: "));
let fin = Number(prompt("Fim: ")); 
for (let i = ini; i <= fin; i++) {
    if (i % 2 === 0) {
        console.log(i); 
    }
}