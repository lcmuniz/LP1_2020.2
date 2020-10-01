// Um programa que pede dois números e imprime o maior deles.

// Pede o primeiro número ao usuário
var numero1 = prompt("Digite o primeiro número: ")

// Pede o segundo número ao usuário
var numero2 = prompt("Digite o segundo número: ")

// Converte as entradas do usuário de textos para números
numero1 = Number(numero1)
numero2 = Number(numero2)

// Testa qual número é o maior e imprime a mensagem adequada
if (numero1 > numero2) {
  console.log("O primeiro número é maior")
}
else if (numero2 > numero1) {
  console.log("O segundo número é maior")
}
else {
  console.log("Os dois números são iguais")
}
