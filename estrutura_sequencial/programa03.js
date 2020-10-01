// Um programa que pede dois números e imprime a soma.

// Pede o primeiro número ao usuário
var numero1 = prompt("Digite o primeiro número: ")

// Pede o segundo número ao usuário 
var numero2 = prompt("Digite o segundo número: ")

// Converte as entradas do usuário (que são strings) em números
numero1 = Number(numero1)
numero2 = Number(numero2)

// Soma os dois números
var soma = numero1 + numero2

// Mostra a soma na tela
console.log("A soma de", numero1, "e", numero2, "é", soma)