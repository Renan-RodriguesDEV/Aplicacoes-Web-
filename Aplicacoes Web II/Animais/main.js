// capturando os elementos da div de id app com querySelector -> (#id_div element)
let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#app button");

let animais = JSON.parse(localStorage.getItem("@animais")) || [];
function deleteAnimal(posicao) {
  if (posicao < 0) {
    return false;
  }
  // remove o animal da lista de animais
  animais.splice(posicao, 1);
  // renderizando a lista de animais
  renderAnimals();
}

function saveAnimals() {
  // salvando a lista de animais no local storage
  localStorage.setItem("@animais", JSON.stringify(animais));
}

function renderAnimals() {
  // inicializa o elemento
  listElement.innerHTML = "";
  // aplica para cada elemento da lista de animais um map
  animais.map((animal) => {
    // cria um novo elemento li
    let li = document.createElement("li");
    // cria um novo texto com o valor da animal
    let animalTxt = document.createTextNode(animal);
    // criando um elemento de link
    let linkElement = document.createElement("a");
    // modificando o href do link adicionando um link valido (link element)
    linkElement.setAttribute("href", "#");

    // criando um texto para o link
    linkText = document.createTextNode("Excluir");
    // adicionando o texto ao link
    linkElement.appendChild(linkText);
    // adiciona o texto ao elemento li
    li.appendChild(animalTxt);
    // adiciona o elemento li a lista de animais do HTML
    listElement.appendChild(li);
    // adiciona o elemento de Link a lista de animais do HTML
    listElement.appendChild(linkElement);

    // indexOff pega a posiçõo do array onde contem (animal) caso nn tenha -1
    let posicao = animais.indexOf(animal);
    // chame a função deletar do array como template string entre crases
    linkElement.setAttribute("onclick", `deleteAnimal(${posicao})`);
  });
}

// renderizando a lista de animais
renderAnimals();

function addAnimal() {
  // verifica se input.value está vazio
  if (inputElement.value === "") {
    // alertando o usuario
    console.log("animal is not defined");
    alert("Digite um animal no campo de input!!!");
    return false;
  } else {
    // pegando o value do inputElement para add a lista de animais
    let newAnimal = inputElement.value;
    console.log(`get animal, value is: ${newAnimal}`);
    // add a newanimal lista de
    animais.push(newAnimal);
    // chama a função de rederizar uma nova animal na lista
    renderAnimals();
    // salvando a animal nos dados de sessão, local storage
    saveAnimals();
    inputElement.value = "";
  }
}
// add um onclick ao buttonElement que chama a função addanimal
buttonElement.onclick = addAnimal;
