alert("Esta foi a atividade da primeira aula do ImersãoDev - Alura, feito por Caio Moura")
var valor = prompt("Insira o valor a ser convertido: ")
while (valor<=0){
  alert("INVALIDO!")
  alert("Insira um valor maior que 0")
  var valor = prompt("Insira o valor a ser convertido: ")
}
var cotacao = prompt("Insira a cotação do dolar ou da moeda desejada: ")
while (cotacao<=0){
  alert("INVALIDO!")
  alert("Insira um valor maior que 0")
  var cotacao = prompt("Insira a cotação do dolar ou da moeda desejada: ")
}
var valorReal = (valor*cotacao)
alert("O valor desse produto em real é: " + valorReal + " reais.")