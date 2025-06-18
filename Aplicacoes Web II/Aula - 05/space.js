var imc;
var resultado;

function somar(event) {
  // previne o comportamento padrão do form
  event.preventDefault();
  var peso = document.getElementById("peso").value;
  var altura = document.getElementById("altura").value;
  peso = parseInt(peso);
  altura = parseInt(altura);
  imc = (peso / (altura * altura)) * 100;
  verificarIMC(imc);
  document.getElementById("resultado").innerText = imc;
  alert(`seu imc é de: ${imc}`);
  return imc;
}
function verificarIMC(imc) {
  if (imc < 17) {
    alert("Muito abaixo do peso");
  } else if (imc >= 17 && imc <= 22) {
    alert("Voce esta saudavel");
  } else {
    alert("Voce esta acima do peso");
  }
}
