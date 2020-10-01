// Um programa que pede 4 notas bimestrais ao usuário e mostra a média.

// Pede a primeira nota ao usuário
var nota1 = prompt("Digite a primeira nota: ")

// Pede a segunda nota ao usuário
var nota2 = prompt("Digite a segunda nota: ")

// Pede a terceira nota ao usuário
var nota3 = prompt("Digite a terceira nota: ")

// Pede a quarta nota ao usuário
var nota4 = prompt("Digite a quarta nota: ")

// Converte as entradas do usuário (que são textos) em números
nota1 = Number(nota1)
nota2 = Number(nota2)
nota3 = Number(nota3)
nota4 = Number(nota4)

// Calcula a média
var media = (nota1 + nota2 + nota3 + nota4) / 4

// Mostra a média na tela
console.log("A média das notas é", media)