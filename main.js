const options = [...document.querySelectorAll('.options')]
const pergunta = document.querySelector('#pergunta')

let oCerta = []
let ordemBandeiras = []
let rodada = 0
let quaisB = 0
let valoresOption = []
let vidas = 3
let clicavel = []

for (i = 0; i < options.length; i++) {
    clicavel.push(true)
}

function embaralharLista(lista) {
    for (i = lista.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        let temp = lista[i]
        lista[i] = lista[j]
        lista[j] = temp
    }
}

function start() {

    oCerta = []
    valoresOption = []
    ordemBandeiras = []

    for (i = 0; i < listaPaises.length; i++) { //Coloca todas as bandeiras numa lista
        ordemBandeiras.push(i)
    }

    embaralharLista(ordemBandeiras) // Embaralha as listas de fato
    let temp = []
    for (i = 0; i < (listaPaises.length / options.length); i++) { //Escolher as certas
        for (j = 0; j < options.length; j++) {
            temp.push(ordemBandeiras[i * options.length + j])
        }
        oCerta.push(temp[Math.floor(Math.random() * temp.length)])
        temp = []

    }
    rodada = 0
    vidas = 3
    document.getElementById('vida').children[0].innerHTML = `Vidas: ${vidas}`

    for (i = 0; i < options.length; i++) {

        valoresOption[i] = ordemBandeiras[quaisB + i]
        options[i].src = listaPaises[ordemBandeiras[quaisB + i]].flag;
        options[i].style.borderColor = "#808080"
    }
}
start() //Arrumar tudo pra começar

console.log('Certa', oCerta)

setInterval(() => pergunta.innerHTML = `Qual a bandeira do(a) ${listaPaises[oCerta[rodada]].pais}?`, 16)

for (i = 0; i < options.length; i++) { //Colocar valores nas bandeiras

    valoresOption.push(ordemBandeiras[quaisB + i])
    options[i].src = listaPaises[ordemBandeiras[quaisB + i]].flag;
}

function acerto() {
    rodada++
    quaisB += options.length

    if (rodada >= oCerta.length) {

        const musicaVitoria = new Audio(oCerta[rodada-1] == 0 ? './mito.mp3':'./trueno.mp3')

        musicaVitoria.currentTime = oCerta[rodada-1] == 0 ? 0:34
        musicaVitoria.volume = 0.17

        musicaVitoria.play()

        document.getElementById('vitoria').innerHTML = oCerta[rodada-1] == 0 ? 'Você é o verdadeiro Patriota':'This is a real drift'
        document.getElementById('vitoria').style.color = oCerta[rodada-1] == 0 ? "#008000":"#FF0000"

        document.getElementById('vitoria').style.display = 'block'
        document.getElementById('tudo').style.display = "none"

    } else {

        for (i = 0; i < options.length; i++) {

            valoresOption[i] = ordemBandeiras[quaisB + i]
            options[i].src = listaPaises[ordemBandeiras[quaisB + i]].flag;
            options[i].style.borderColor = "#808080"

            clicavel[i] = true
        }

    }
}
function erro(qual) {
    vidas--;
    options[qual].style.borderColor = "#a626a6"
    clicavel[qual] = false

    document.getElementById('vida').children[0].innerHTML = `Vidas: ${vidas}`

    if (vidas <= 0) {
        start()
    }
}