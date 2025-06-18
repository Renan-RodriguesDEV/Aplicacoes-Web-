var area = document.getElementById("area");
var n = document.getElementById("n");

function myFunc() {
  var time_nome = prompt("what is time from futboll?");
  if (time_nome === "Corinthians") {
    alert("ksksksksksksk Yuri Alberto kakkakaka");
    n.innerText = time_nome;
  }
}

function enterTime() {
  let nome = prompt("what is name");
  var data = new Date();
  alert("Bem vindo " + nome + " Agora são: " + data.toLocaleDateString());
  area.innerHTML = data.toLocaleDateString();
}

function myFunc2() {
  let nome = prompt("what is name");
  if (nome === "" || nome === null) {
    alert("Ops algo deu errado !!");
    area.innerHTML = "Clique no botão para acessar...";
  } else {
    alert("Bem vindo " + nome);
    let botaoSair = document.createElement("button");
    botaoSair.innerText = "Exit";
    botaoSair.onclick = sair;
    n.appendChild(botaoSair);
  }
}

function sair() {
  alert("Saindo...");
  area.innerHTML = "Você está saindo";
}
function setBack() {
  var back = document.getElementsByTagName("img");
  back[0].hidden = false;
}

function setColorPage() {
  document.body.style.backgroundColor = "purple";
}
