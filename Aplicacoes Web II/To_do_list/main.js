// capturando os elementos da div de id app com querySelector -> (#id_div element)
let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#app button");

let tarefas = JSON.parse(localStorage.getItem("@tarefas")) || [];
function deleteTask(posicao) {
  if (posicao < 0) {
    return false;
  }
  // remove a tarefa da lista de tarefas
  tarefas.splice(posicao, 1);
  // renderizando a lista de tarefas
  renderTask();
}

function salvarTask() {
  // salvando a lista de tarefas no local storage
  localStorage.setItem("@tarefas", JSON.stringify(tarefas));
}

function renderTask() {
  // inicializa o elemento
  listElement.innerHTML = "";
  // aplica para cada elemento da lista de tarefas um map
  tarefas.map((task) => {
    // cria um novo elemento li
    let li = document.createElement("li");
    // cria um novo texto com o valor da tarefa
    let tarefaTxt = document.createTextNode(task);
    // criando um elemento de link
    let linkElement = document.createElement("a");
    // modificando o href do link adicionando um link valido (link element)
    linkElement.setAttribute("href", "#");

    // criando um texto para o link
    linkText = document.createTextNode("Excluir");
    // adicionando o texto ao link
    linkElement.appendChild(linkText);
    // adiciona o texto ao elemento li
    li.appendChild(tarefaTxt);
    // adiciona o elemento li a lista de tarefas do HTML
    listElement.appendChild(li);
    // adiciona o elemento de Link a lista de tarefas do HTML
    listElement.appendChild(linkElement);

    // indexOff pega a posiçõo do array onde contem (task) caso nn tenha -1
    let posicao = tarefas.indexOf(task);
    // chame a função deletar do array como template string entre crases
    linkElement.setAttribute("onclick", `deleteTask(${posicao})`);
  });
}

// renderizando a lista de tarefas
renderTask();

function addTask() {
  // verifica se input.value está vazio
  if (inputElement.value === "") {
    // alertando o usuario
    console.log("task is not defined");
    alert("Digite a tarefa no campo de input!!!");
    return false;
  } else {
    // pegando o value do inputElement para add a lista de tarefas
    let newTarefa = inputElement.value;
    console.log(`get task, value is: ${newTarefa}`);
    // add a newTarefa lista de
    tarefas.push(newTarefa);
    // chama a função de rederizar uma nova tarefa na lista
    renderTask();
    // salvando a tarefa nos dados de sessão, local storage
    salvarTask();
    // criando um elemento a partir do valor do inputElement
    // novo = document.createElement("li");
    // novo.innerText = newTarefa;
    // adicionando o novo elemento a lista de tarefas do HTMl
    // listElement.appendChild(novo);
    // limpar campo de input
    inputElement.value = "";
  }
}
// add um onclick ao buttonElement que chama a função addTarefa
buttonElement.onclick = addTask;
