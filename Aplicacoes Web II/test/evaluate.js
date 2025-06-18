// 1)	Crie uma função chamada desestruturarArray que receba um array como argumento e retorne uma string formatada com os valores desestruturados.
// Estrutura do array: let pessoa1 = ['Maria', 30, ‘Aguas de sta bárbara’];

const pessoa = ["Maria", 30, "Aguas de sta bárbara"];

function destructArray(array) {
  let [nome, idade, cidade] = array;
  return `${nome},${idade},${cidade}`;
}
// console.log(destructArray(pessoa));

// 2)	Crie um array chamado pessoa que contenha as seguintes informações: nome, idade, cidade. Use a desestruturação de arrays para extrair os valores do array pessoa e atribuí-los a variáveis individuais chamadas nome, idade e cidade.
let pessoa2 = ["nome", "idade", "cidade"];

let [nome, idade, cidade] = pessoa2;
console.log(nome, idade, cidade);

// 1)	Dado o array let cores = ['Vermelho', 'Verde', 'Azul', 'Amarelo']. Ignore o segundo elemento utilizando a reconstrução do arrary

let cores = ["vermelho", "verde", "azul", "amarelo"];
let [v, , a, am] = cores;
console.log(v, a, am);

// 1)	Dado os arrays:

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
// Cocatene os arrays
let arrConcat = [...array1, ...array2];
console.log(arrConcat);

// 5)	Dado o objeto: originalObj = { a: 1, b: 2 }. Faça o clone do mesmo usando spread
let originalObj = { a: 1, b: 2 };
let cloneObj = { ...originalObj };
console.log(cloneObj);

// 6)	Dados os objetos:
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
// mescle usando operador spread
const mergeObj = { ...obj1, ...obj2 };
console.log(mergeObj);

// 7)	Dado o objeto:
// pessoa = { nome: 'Carlos', idade: 30, cidade: 'Rio de Janeiro' }
// Use o operador spread para passar as propriedades do objeto como argumento da função
let p3 = { n: "Carlos", i: 30, c: "Rio de Janeiro" };
function apresentar({ n, i, c }) {
  console.log(n, i, c);
}

apresentar({ ...p3 });

// 8)	Dado o array:alunos(“alexandre”,”carlos”,”Pedro”,”maria”)
// Crie uma função que receba como parametro o aluno e exiba o nome de cada um.

let alunos = ["“alexandre”", "”carlos”", "”Pedro”", "”maria”"];
function exibeAluno(aluno) {
  for (a of aluno) {
    console.log(a);
  }
}
exibeAluno(alunos);
// 9)	Dado uma lista:
let fruta = ["“maça”", "”banana”", "”laranja”"];
// 	Percorra a mesma e exiba o item e sua posição
fruta.map((f, index) => {
  console.log(index + ":" + f);
});

// 10) dado o objeto calcule sua soma de seus precos
let produtos = [
  { nome: "Caneta", quantidade: 10, preco: 1.5 },
  { nome: "Caderno", quantidade: 5, preco: 10.0 },
  { nome: "Borracha", quantidade: 3, preco: 0.75 },
];

// reduce recebe na primeira volta como soma o primeiro elemento passado do objto/array, nas demais ira somar eles, como ultimo parametro pd se passar um valor inicial como abaixo foi o 0
let soma = produtos
  .map((p) => p.preco)
  .reduce((soma, preco) => preco + soma, 0);
console.log(soma);

let sum = 0;
for (p of produtos) {
  sum += p.preco;
}
console.log(sum);
