function enter() {
  alert("Alerta");
  btn.innerText = "Entrou";
  let back = document.getElementById("body");
  back.style.backgroundColor = "gray";
  console.log("Mudando de cor");
}

let btn = document.getElementById("btn");
btn.onclick = enter;

function minhaFunc() {
  alert("Minha H2");
  let h2 = document.createElement("h2");
  h2.textContent = "Voce entrou na VJ";
  document.body.appendChild(h2);
}

function isName() {
  var nome = prompt("Insira seu nome");
  if (nome === "Renan") {
    alert(`Bem vindo ${nome}`);
  } else {
    nome = prompt("Insira seu nome:");
    alert("Seu nome é: " + nome);
  }
}
