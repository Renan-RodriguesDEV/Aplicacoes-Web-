var array = ["R", "e", "n", "a", "n"];
function aosContrario(array) {
  var result = "";
  for (let i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
    result += array[i];
  }
  console.log(result);
}

// aosContrario(array);

function enviar() {
  var email = document.getElementById("email").value;
  var senha = document.getElementById("pass").value;
  var element = document.createElement("p");
  element.innerText = email + " " + senha;

  document.body.appendChild(element);
  console.log("Realizado ...");
}

function acrecentar() {
  var elem = document.getElementById("inserido");
  inserido = elem.value;
  var lista = document.getElementById("list");
  var item = document.createElement("li");
  item.innerText = inserido;
  lista.appendChild(item);
  elem.value = "";
}

function bubble(list) {
  for (let i = 0; i < list.length; i++) {
    for (let y = i + 1; y < list.length; y++) {
      if (list[i] > list[y]) {
        let temp = list[i];
        list[i] = list[y];
        list[y] = temp;
      }
    }
  }
  return list;
}
function ordenar() {
  var str = document.getElementById("odr");
  var strNum = str.value;
  var lista = strNum.split(",");
lista = lista.sort((a, b) => a - b);
//   lista = lista.map(Number); se for utilizar o bubble sort descomente aqui
//   lista = bubble(lista);
  console.log(lista);
  var n = document.createElement("li");
  n.innerHTML = `<b>${lista}</b>`;
  document.body.appendChild(n);
  str.value = "";
}
