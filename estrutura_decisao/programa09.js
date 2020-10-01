// Um programa que lê duas notas parciais de um aluno. O programa deve calcular a média alcançada pelo aluno e apresentar a mensagem "Aprovado", se a média alcançada for maior ou igual a sete; a mensagem "Reprovado", se a média for menor do que sete; a mensagem "Aprovado com distinção", se a média for igual a dez

// Pede a primeira nota
var nota1 = prompt("Digite a primeira nota: ")

// Pede a segunda nota
var nota2 = prompt("Digite a segunda nota: ")

// Converte as entradas do usuário de textos para números
nota1 = Number(nota1)
nota2 = Number(nota2)

// Calcula a média das notas
var media = (nota1 + nota2) / 2

// Testa a média e mostra a mensagem apropriada
if (media === 10) {
  console.log("Aprovado com distinção")
}
else if (media >= 7) {
  console.log("Aprovado")
}
else {
  console.log("Reprovado")
}