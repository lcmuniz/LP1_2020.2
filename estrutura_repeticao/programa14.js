// Um programa que calcula o fatorial de um número inteiro fornecido pelo usuário. Ex.: 5!=5.4.3.2.1=120

// Pede o número ao usuário
var numero = prompt("Digite o número: ")

// Converte a entrada do usuário de texto para número
numero = Number(numero)

// Inicializa fatorial com 1
var fatorial = 1

// Faz um laço variando n de 2 até o número entrado pelo usuário
for (var n = 2; n <= numero; n++) {
  // Acumula cada multiplicação, calculando o fatorial
  fatorial = fatorial * n
}

// Mostra o fatorial do número entrado pelo usuário
console.log(fatorial)