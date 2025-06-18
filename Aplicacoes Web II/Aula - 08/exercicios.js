// 1)	Crie uma função chamada desestruturarArray que receba um array como argumento e retorne uma string formatada com os valores desestruturados.
// Estrutura do array: let pessoa1 = ['Maria', 30, ‘Aguas de sta bárbara’];
function desetruturaArray(array) {
  let [nome, idade, cidade] = array;
  return `nome: ${nome}, idade: ${idade}, cidade: ${cidade}`;
}
let arr = ["Mariani", 50, "Aguas de sta bárbara"];
strFormatada = desetruturaArray(arr);
console.log(strFormatada);

// 2)	Crie um array chamado pessoa que contenha as seguintes informações: nome, idade, cidade. Use a desestruturação de arrays para extrair os valores do array pessoa e atribuí-los a variáveis individuais chamadas nome, idade e cidade.
let pessoas = ["Jotinha", 19, "Avaré"];
let [nome, idade, cidade] = pessoas;
console.log(nome);
console.log(idade);
console.log(cidade);

// 3)	Dado o array let cores = ['Vermelho', 'Verde', 'Azul', 'Amarelo']. Ignore o segundo elemento utilizando a reconstrução do arrary
let cores = ["Vermelho", "Verde", "Azul", "Amarelo"];
let { 0: vermelho, 2: azul, 3: amarelo } = cores;
console.log(vermelho, azul, amarelo);

// 4)	Dado os arrays:
// let array1 = [1, 2, 3];
// let array2 = [4, 5, 6];
// Cocatene os arrays

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let concat = [...array1, ...array2];
console.log(concat);

// 5)	Dado o objeto: originalObj = { a: 1, b: 2 }. Faça o clone do mesmo usando spread
let originalObj = { a: 1, b: 2 };
let clone = { ...originalObj };

// 6)	Dados os objetos:
// const obj1 = { a: 1, b: 2 };
// const obj2 = { c: 3, d: 4 }
// mescle usando operador spread

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

let mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj);

// 7)	Dado o objeto:
// pessoa = { nome: 'Carlos', idade: 30, cidade: 'Rio de Janeiro' }
// Use o operador spread para passar as propriedades do objeto como argumento da função
// Let pessoa = { nome: 'Carlos', idade: 30, cidade: 'Rio de Janeiro' };
let person = { nome: "Carlos", idade: 30, cidade: "Rio de Janeiro" };
function apresentarPessoa({ nome, idade, cidade }) {
  console.log(`Nome: ${nome}, Idade: ${idade}, Cidade: ${cidade}`);
}

apresentarPessoa({ ...person });

// 8)	Dado o array:alunos(“alexandre”,”carlos”,”Pedro”,”maria”)
// Crie uma função que receba como parametro o aluno e exiba o nome de cada um.
let alunos = ["alexandre", "carlos", "Pedro", "maria"];
function yourName(names) {
  for (let name of names) {
    console.log(name);
  }
}
yourName(alunos);
alunos.map((aluno) => console.log(aluno));

// 9)	Dado uma lista:fruta=[“maça”,”banana”,”laranja”]
// 	Percorra a mesma e exiba o item e sua posição
let frutas = ["maça", "banana", "laranja"];
frutas.map((fruta, index) => console.log(`item: ${fruta}, posição: ${index}`));

// 10) dado o objeto let produtos = [
//   { nome: 'Caneta', quantidade: 10, preco: 1.50 },
//   { nome: 'Caderno', quantidade: 5, preco: 10.00 },
//   { nome: 'Borracha', quantidade: 3, preco: 0.75 }
// ]; calcule sua soma de seus precos
let produtos = [
  { nome: "Caneta", quantidade: 10, preco: 1.5 },
  { nome: "Caderno", quantidade: 5, preco: 10.0 },
  { nome: "Borracha", quantidade: 3, preco: 0.75 },
];

const somaPrecos = produtos
  .map((produto) => produto.preco) // Cria um array apenas com os preços
  .reduce((acumulador, preco) => acumulador + preco, 0);

console.log(`A soma dos preços é: R$ ${somaPrecos}`);
