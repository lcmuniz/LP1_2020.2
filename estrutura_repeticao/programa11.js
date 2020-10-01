// Um programa que pede uma nota, entre zero e dez. Mostra uma mensagem caso o valor seja inválido e continua a pedir até que o usuário informe um valor válido.

// Pede a nota ao usuário
var nota = prompt("Digite uma nota entre 0 e 10")
// Converte em número
nota = Number(nota)

// Enquanto a nota não estiver entre 0 e 10...
while (nota < 0 || nota > 10) {

  // Mostra mensagem de nota inválida
  alert("Nota inválida")

  // Pede a nota novamente
  nota = prompt("Digite uma nota entre 0 e 10")

}

// Mostra a nota válida na tela
console.log("A nota válida foi", nota)