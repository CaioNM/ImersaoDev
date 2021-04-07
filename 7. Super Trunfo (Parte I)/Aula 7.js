var cartaCaio={
  nome:'Oliver',
  atributos:{
    ataque: 90,
    defesa: 65,
    magia: 20
    }
}

var cartaBebel = {
  nome: 'Diana',
  atributos:{
    ataque: 85,
    defesa: 60,
    magia: 90
  }
}

var cartaCellbit = {
  nome: 'Carniçal',
  atributos:{
    ataque: 99,
    defesa: 90,
    magia: 85
  }
}

var cartaMaquina
var cartaJogador
var cartas = [cartaCaio, cartaBebel, cartaCellbit]
// 0          1           2

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 3)
    cartaMaquina = cartas[numeroCartaMaquina]

    var numeroCartaJogador = parseInt(Math.random() * 3)
    while (numeroCartaJogador == numeroCartaMaquina) {
        numeroCartaJogador = parseInt(Math.random() * 3)
    }
    cartaJogador = cartas[numeroCartaJogador]
    console.log(cartaJogador)

    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false
    exibirOpcoes()
}

function exibirOpcoes() {
    var opcoes = document.getElementById('opcoes')
    var opcoesTexto = ""
    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo
    }
    opcoes.innerHTML = opcoesTexto
}

function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
}

function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado()

    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        alert('Venceu!')
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        alert('Perdeu.')
    } else {
        alert('Empatou!')
    }
    console.log(cartaMaquina)
}