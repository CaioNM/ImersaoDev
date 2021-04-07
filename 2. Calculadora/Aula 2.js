var op = prompt("Digite: 1 pra soma // 2 pra subtração // 3 pra multiplicação // 4 pra divisão")

var a = parseFloat(prompt("Digite o primeiro valor: "))
var b = parseFloat(prompt("Digite o segundo valor: "))

if(op==1){
  var resultado = a+b;
  document.write("<h2>" + resultado + "</h2>");
}else if(op==2){
  var resultado = a-b;
  document.write("<h2>"+resultado+"</h2>");
}else if(op==3){
  var resultado = a*b;
  document.write("<h2>"+resultado+"</h2>");
}else if(op==4){
  var resultado = a/b;
  document.write("<h2>"+resultado+"</h2>");
}else{
  document.write("Inválido");
}