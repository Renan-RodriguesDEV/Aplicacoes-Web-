// criando a lista
function desconstructionList() {
  let nome = ["matheus", "mariani", "pedro"];
  console.log("List: " + nome);

  // descustrução do array
  let [primeiro, segundo, terceiro] = nome;
  console.log("List-desconstruction: " + primeiro);
  console.log("List-desconstruction: " + segundo);
  console.log("List-desconstruction: " + terceiro);
}

function desconstructionObject() {
  // craindo um objto
  let pessoa = {
    nome: "little",
    sobrenome: "hair",
    empresa: "CV",
    cargo: "dono da boca",
  };

  // exibindo os atributos desse objto
  console.log("Object: " + pessoa.nome);
  console.log("Object: " + pessoa.empresa);

  // descontruindo o objto
  let { nome, sobrenome, empresa, cargo } = pessoa;
  console.log("Object-desconstruction: " + nome);
  console.log("Object-desconstruction: " + sobrenome);
  console.log("Object-desconstruction: " + empresa);
  console.log("Object-desconstruction: " + cargo);
}

function desconstructionListTypeTwo() {
  // descostução de arrays outra forma
  let nomes = ["Donald Trump", "Elon Musk", "Jair Messias"];
  let { 0: A, 1: B, 2: C } = nomes;
  console.log("List-desconstruction: " + A);
  console.log("List-desconstruction: " + B);
  console.log("List-desconstruction: " + C);
}
function spreadList() {
  let primeiro = [1, 2, 3, 4];
  // spread operator
  let segundo = [...primeiro, 5, 6, 7, 8, 9, 10];
  console.log("lista: " + primeiro);
  console.log("lista spread: " + segundo);
}

function spreadObject() {
  // spread operator in Object
  let pessoa = {
    nome: "Cristiano",
    sobrenome: "Ronaldo",
    sexo: "sim",
    cidade: "Itaí",
    idade: 19,
  };
  console.log("Object default");

  console.log(pessoa);

  let dadosCompletos = {
    ...pessoa,
    cargo: "Desenvolvedor Front-End",
    saldo_bancario: "R$4.000,00",
  };
  console.log("Object spread");

  console.log(dadosCompletos);
}

// desmanhando um dado atraves do spread operator
function newUser(info) {
  let dados = { ...info, estado: "ativo", inicio: "20/02/2000", codigo: "666" };
  console.log(dados);
}

// Operador RestOperator
function convidados(...nomes) {
  console.log("Bem vindos convidados");
  // for para iterar sobre o objetos
  for (let nome of nomes) {
    console.log(nome);
  }
}

function sorteador(...numbers) {
  console.log(numbers);
  x = parseInt(Math.random() * numbers.length);
  console.log(numbers[x]);
}
// setInterval(() => {
//   sorteador(5, 10, 15, 20, 25, 30);
// }, 60);

// função map
let lista = ["adolf", "stalim", "bonapart"];
// aplica uma função para cada item da lista
lista.map((item, index) => {
  console.log(`posição ${index} conteudo ${item}`);
});
lista.map(console.log, lista);

// chamando as funções

convidados("Renan", "Luiz", "Bruno");
newUser({ nome: "Chico", sobrenome: "Bahia", cargo: "Pedreiro" });
desconstructionList();
desconstructionObject();
desconstructionListTypeTwo();
