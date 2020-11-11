const entradaC = document.getElementById('entrada')
const listaC = document.getElementById('lista')

const salvarC = document.getElementById('salvar')
const carregarC = document.getElementById('carregar')

let tarefas = []

let indice = 0

function carregarTarefas() {
  tarefas.forEach(function(item) {
    const tarefa = {
      texto: item.texto,
      id: item.id,
      completada: item.completada,
      apagada: item.apagada
    }
    adicionarTarefa(tarefa);
  })  
}

function adicionarTarefa(tarefa) {

  if (tarefa.apagada) return;

  const circulo = tarefa.completada ? 'fa-check-circle' : 'fa-circle'
  const risco = tarefa.completada ? 'risco' : ''

  const item = `
    <li class="item" id="${tarefa.id}">
      <i class="fa ${circulo} circulo" type="circulo"></i>
      <p class="texto ${risco}" type="texto">${tarefa.texto}</p>
      <i class="fa fa-trash lixeira" type="lixeira"></i>
    </li>`

    listaC.insertAdjacentHTML('beforeend', item)
    entradaC.value = ''
    indice = indice + 1


}

listaC.addEventListener('click', function(event) {
  
  const element = event.target

  if(element.attributes.type === undefined) return

  if (element.attributes.type.value === 'circulo') {

      element.classList.toggle('fa-circle')
      element.classList.toggle('fa-check-circle')
      element.parentNode.querySelector('.texto').classList.toggle('risco')

      tarefas[element.parentNode.id].completada = !tarefas[element.parentNode.id].completada

  }

  if (element.attributes.type.value === 'lixeira') {
    
    const li = element.parentNode

    const ul = li.parentNode

    tarefas[li.id].apagada = true
    ul.removeChild(li)

  }

  
})

entradaC.addEventListener('keyup', function(event) {
  
  if (event.keyCode === 13) {

    if (entradaC.value === '') return
  
    const tarefa = {
      id: indice,
      texto: entradaC.value,
      completada: false,
      apagada: false

    }
    adicionarTarefa(tarefa)
    tarefas.push(tarefa)

  }
  
})

salvarC.addEventListener('click', function(event) {
  localStorage.setItem('TAREFAS', JSON.stringify(tarefas))
})

carregarC.addEventListener('click', function(event) {

    const data = localStorage.getItem('TAREFAS')

    tarefas = JSON.parse(data)

    listaC.innerHTML = '';

    carregarTarefas()

})


