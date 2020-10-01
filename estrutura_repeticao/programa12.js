// Um programa que lê 5 números e informa a soma e a média dos números.

var quantidade = 5
var soma = 0

// Um laço de 5 passos
for (var i = 1; i <= quantidade; i++) {
  
  // Pede o número ao usuário
  var numero = prompt("Digite o " + i + "º número: ")

  // Converte a entrada do usuário de texto para número
  numero = Number(numero)

  // Acumula cada número em soma
  soma = soma + numero
}

// Calcula a média
var media = soma / quantidade

// Mostra os resultados
console.log("A soma é", soma)
console.log("A média é", media)