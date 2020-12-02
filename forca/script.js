const palavraArea = document.getElementById('palavraArea')
const letra = document.getElementById('letra')
const enviar = document.getElementById('enviar')
const novo = document.getElementById('novo')
const mensagemTentativas = document.getElementById('mensagemTentativas')
const mensagemPalpites = document.getElementById('mensagemPalpites')

let palavra = ''
let palpites = ''
let tentativas = 10

async function obterPalavra(nomeArquivo) {

    const arquivo = await fetch(nomeArquivo)
    const texto =  await arquivo.text()
    const palavras = texto.split('\n')

    const indice = Math.floor(Math.random() * palavras.length)

    const palavra = palavras[indice]
    return palavra
}

function escreverPalavra(palavra) {
    let terminou = true

    palavraArea.innerHTML = ''

    for (p of palavra) {
        const input = document.createElement('input')
        input.className = 'letra'
        input.disabled = true
        if (palpites.indexOf(p) >= 0) {
            input.value = p
        }
        else {
            input.value = ''
            terminou = false
        }

        palavraArea.appendChild(input)
    }
    return terminou
}

novo.addEventListener('click', async function() {
    letra.disabled = false
    enviar.disabled = false
    mensagemPalpites.innerHTML = ''
    mensagemTentativas.innerHTML = ''
    tentativas = 10 
    palpites = ''
    palavra = await obterPalavra('palavras.txt')
    escreverPalavra(palavra)
    console.log(palavra)
})

enviar.addEventListener('click', function() {
    if (letra.value === '') return;
    letra.value = letra.value.toUpperCase()

    if (palavra.indexOf(letra.value) == -1) {
        tentativas--
        mensagemTentativas.innerHTML = 'Você tem ' + tentativas + " restantes"
    }

    if (palpites.indexOf(letra.value) == -1) {
        palpites = palpites + letra.value
    }

    const terminou = escreverPalavra(palavra)

    letra.value = ''
    if (terminou) {
        mensagemTentativas.innerHTML = "Você acertou!"
        enviar.disabled = true
        letra.disabled = true
    }
    else {
        letra.focus()
        if (tentativas === 0) {
            mensagemTentativas.innerHTML += "<br>Você perdeu!"
            enviar.disabled = true
            novo.disabled = false
        }
    }

    mensagemPalpites.innerHTML = "Letras já digitadas: " + palpites.split('').sort()


})

novo.click()