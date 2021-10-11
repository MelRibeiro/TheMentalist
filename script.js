var numeroSecreto = parseInt(Math.random() * 11);
var tentativas = 3;
var pontoMaquina = 0;
var pontoJogador = 0;

function Chutar() {
  var resultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  //verifica se o número é igual ao secreto
  if (chute == numeroSecreto) {
    pontoJogador++;
    resultado.innerHTML =
      "Parabéns! Patrick está orgulhoso, você acertou!" + " Maquina = " + "";
    pontoMaquina + " X " + "Jogador=" + pontoJogador;
    document.getElementById("recomeçar").disabled = false;
    document.getElementById("chutar").disabled = true;
    //caso o numero for maior que 10 ou menor que 0, aparecerá essa msg
  } else if (chute > 10 || chute < 0) {
    resultado.innerHTML = "Ei, você precisa digitar um número de 0 a 10!";
    //se o numero for maior, aparecerá essa msg
  } else if (chute > numeroSecreto) {
    resultado.innerHTML =
      "Quase lá, o número é menor que o digitado. Você tem " +
      tentativas +
      " tentativas!";
    tentativas--;
    if (tentativas == 0) {
      pontoMaquina++;
      document.getElementById("recomeçar").disabled = false;
      document.getElementById("chutar").disabled = true;
      resultado.innerHTML =
        "Infelizmente suas chances acabaram, o número secreto era " +
        numeroSecreto +
        "." +
        " Maquina=" +
        pontoMaquina +
        " X " +
        "Jogador=" +
        pontoJogador;
    }
    //se o numero for menor, aprecerá essa msg
  } else if (chute < numeroSecreto) {
    resultado.innerHTML =
      "Quase lá, o número é maior que o digitado. Você tem " +
      tentativas +
      " tentativas!";
    tentativas--;
    //se não, vc errou
    if (tentativas == 0) {
      pontoMaquina++;
      document.getElementById("recomeçar").disabled = false;
      document.getElementById("chutar").disabled = true;
      resultado.innerHTML =
        "Infelizmente suas chances acabaram, o número secreto era " +
        numeroSecreto +
        "." +
        " Maquina=" +
        pontoMaquina +
        " X " +
        "Jogador=" +
        pontoJogador;
    }
  } else {
    resultado.innerHTML = "Você errou";
  }
}
function Recomeçar() {
  document.getElementById("chutar").disabled = false;
  numeroSecreto = parseInt(Math.random() * 11);
  tentativas = 3;
  resultado.innerHTML = "Próxima rodada, chute um número!";
  document.getElementById("recomeçar").disabled = true;
}