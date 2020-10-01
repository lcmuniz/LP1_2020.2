// Um programa que lê dois vetores com 5 elementos cada. Gera um terceiro vetor de 5 elementos, cujos valores são compostos pelos elementos intercalados dos dois outros vetores.

// Inicializa vetores
var vetor1 = []
var vetor2 = []
var vetor3 = []

// Pede os números do primeiro vetor
alert("Números do primeiro vetor")
for (var i = 0; i < 5; i++) {
  vetor1[i] = prompt("Digite um número: ")
  vetor1[i] = Number(vetor1[i])
} 

// Pede os números do segundo vetor
alert("Números do segundo vetor")
for (var i = 0; i < 5; i++) {
  vetor2[i] = prompt("Digite um número: ")
  vetor2[i] = Number(vetor2[i])
} 

// Intercala os números dos dois vetores no terceiro vetor
for (var i = 0; i < 5; i++) {
  vetor3.push(vetor1[i])
  vetor3.push(vetor2[i])
}

// Mostra os vetores
console.log("Vetor 1: ", vetor1)
console.log("Vetor 2: ", vetor2)
console.log("Vetor 3: ", vetor3)

