var resposta = parseInt(Math.random() *10)
var tentativas  = 3

while (tentativas!=0){
  var chute = parseFloat(prompt("Digite um número entre 0 e 10"))
  if(chute == resposta){
    alert("Acertou")
    break
  }else{
    if (chute>resposta){
      alert("Errou. Tente de novo, a resposta é menor")
    }else if(resposta>chute){
      alert("Errou. Tente de novo, a resposta é maior")
    }
    tentativas=tentativas-1
  }
 }
if (tentativas==0){
  alert('Que pena, acabaram as tentativas, a resposta era ' + resposta)
}else{
alert('Parabéns')
  }