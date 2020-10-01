// Um programa que lê 4 notas, armazena em uma lista, mostra as notas e a média na tela.

// Inicializa o array de notas
var notas = []

// Laço para pedir as 4 notas
for (var i = 0; i < 4; i++) {
  var numero = prompt("Digite um número: ")
  numero = Number(numero)
  notas.push(numero)
}

// Inicializa a soma das notas
var soma = 0

// Laço para somar as notas
for (var i = 0; i < notas.length; i++) {
  soma = soma + notas[i]
}

// Calcular a média
var media = soma / notas.length

// Mostras as notas e a média na tela
console.log("Notas: ", notas)
console.log("Média: ", media)