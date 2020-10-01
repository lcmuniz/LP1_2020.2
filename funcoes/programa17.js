// Um programa, com uma função que necessita de três argumentos, 
// e que fornece a soma desses três argumentos.

// Declara a função
function soma3(x, y, z) {
  return x + y + z
}

// Pede três números
var num1 = Number(prompt("Digite o primeiro número: "))

var num2 = Number(prompt("Digite o segundo número: "))

var num3 = Number(prompt("Digite o terceiro número: "))

// Soma os três números usando a função
soma = soma3(num1, num2, num3)

// Mostra a soma
console.log("A soma é", soma)