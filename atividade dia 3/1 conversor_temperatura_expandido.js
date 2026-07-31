//let num1 = Number(prompt("Celsius:"));
//let num2 = Number(prompt("Fahrenheit:"));
//let num3 = Number(prompt("Kelvin:"));
//console.log("Celsius para")
//console.log("Fahrenheit:" ,(num1 * 9/5) + 32 )
//console.log("Kelvin:", (num1+ 273.15 ))
//console.log("Fahrenheit para")
//console.log("Celsius:" ,(num2 - 32) * 5/9)
//console.log("Kelvin:", (num2 - 32) * 5/9 + 273.15)
//console.log("Kelvin para")
//console.log("Fahrenheit:" ,(num3 - 273.15) * 9/5 + 32 )
//console.log("Celsius:", (num3 - 273.15 ))
console.log("1 - Celsius");
console.log("2 - Fahrenheit");
console.log("3 - Kelvin");

let opcao = Number(prompt("Digite o número da opção desejada (1, 2 ou 3):"));

if (opcao === 1) {
    let celsius = Number(prompt("Digite a temperatura em Celsius:"));
    let fahrenheit = (celsius * 9/5) + 32;
    let kelvin = celsius + 273.15;
    
    console.log(" Resultados ");
    console.log("Fahrenheit: " + fahrenheit.toFixed(2) + " °F");
    console.log("Kelvin: " + kelvin.toFixed(2) + " K");

} else if (opcao === 2) {
    let fahrenheit = Number(prompt("Digite a temperatura em Fahrenheit:"));
    let celsius = (fahrenheit - 32) * 5/9;
    let kelvin = ((fahrenheit - 32) * 5/9) + 273.15;
    
    console.log(" Resultados ");
    console.log("Celsius: " + celsius.toFixed(2) + " °C");
    console.log("Kelvin: " + kelvin.toFixed(2) + " K");

} else if (opcao === 3) {
    let kelvin = Number(prompt("Digite a temperatura em Kelvin:"));
    let celsius = kelvin - 273.15;
    let fahrenheit = (kelvin - 273.15) * 9/5 + 32;
    
    console.log(" Resultados ");
    console.log("Celsius: " + celsius.toFixed(2) + " °C");
    console.log("Fahrenheit: " + fahrenheit.toFixed(2) + " °F");

} else {
    console.log("Opção inválida! Escolha 1, 2 ou 3.");
}