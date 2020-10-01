// Um programa que lê três números e mostra o maior deles.

// Pede o primeiro número
var numero1 = prompt("Digite o primeiro número: ")

// Pede o segundo número
var numero2 = prompt("Digite o segundo número: ")

// Pede o terceiro número
var numero3 = prompt("Digite o terceito número: ")

// Converte as entradas do usuário de textos para números
numero1 = Number(numero1)
numero2 = Number(numero2)
numero3 = Number(numero3)

// Assume que o maior é numero1
var maior = numero1

// Testa se o maior é numero2 
if (numero2 > maior) {
  maior = numero2
}

// Testa se o maior é numero3 
if (numero3 > maior) {
  maior = numero3
}

// Mostra que é o maior na tela
console.log("O maior número é", maior)
