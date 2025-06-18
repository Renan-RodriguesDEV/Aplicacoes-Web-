// 1) concatene as strings nome e sobrenome
function nomeSobrenome() {
  var nome = "Bruce";
  var sobrenome = "Wayne";

  console.log(nome + " " + sobrenome);
}

nomeSobrenome();

// 2 )faça um algoritimo para verificação se o numero é positivo, negativo ou zero
var numero = 6;
function isNumber(number) {
  number = Number(number);
  if (number < 0) {
    console.log("is number negative (-) meu rei " + number);
  } else if (number > 0) {
    console.log("is number positive (+) meu rei " + number);
  } else {
    console.log("is number zero (0) meu rei " + number);
  }
}

isNumber(numero);

// 3) use um laço simples para exibir números de 1 a 5
function numsUmCinco() {
  var meuArray = [1, 2, 3, 4, 5];
  for (i = 0; i < meuArray.length; i++) {
    console.log("is number: " + meuArray[i]);
  }
}

// 4) crie uma função que receba um numero e retorne seu quadrado
function sqrt(number) {
  return number ** 2;
}

console.log('O quadrado é ' + sqrt(4));

// 5) crie um array e exiba todos os elementos utilizando um laço
function exibeArray() {
  var elementos = [10, 20, 30, 40, 50, 60, 70];
  console.log("seu array..");

  for (let index = 0; index < elementos.length; index++) {
    console.log(elementos[index]);
  }
}

exibeArray();

// 6) crie uma função para determinar se pode ou não votar (idade >= 16)
function voteEmMim(idade) {
  if (idade >= 16) {
    console.log("Você já está habito para fazer o L");
  } else {
    console.log("Infelizmente você ainda não tem idade para voto =)");
  }
}

voteEmMim(15);

//  9) Encontre o índice de um elemento específico em um array
//    frutas = ['maçã', 'banana', 'laranja'];
//    Encontre o índice correspondente a laranja Remova o elemento banana

function minhasFrutas() {
  var frutas = ["maçã", "banana", "laranja"];
  console.log(frutas.indexOf("laranja")); // Mostra o índice da laranja
  var indexBunana = frutas.indexOf("banana");
  frutas.splice(1, indexBunana);
  console.log("frutas: " + frutas); // Mostra a lista sem a banana
}
minhasFrutas();

// 10) Ordene um array de números em ordem crescente numeros = [5, 3, 8, 1, 2];

function ordenaNumeros() {
  var numeros = [5, 3, 8, 1, 2];
  for (i = 0; i < numeros.length; i++) {
    for (j = i + 1; j < numeros.length; j++) {
      if (numeros[i] > numeros[j]) {
        let temp = numeros[j];
        numeros[j] = numeros[i];
        numeros[i] = temp;
      }
    }
  }
  // numeros = numeros.sort((a, b) => a - b);
  console.log("Numeros ordenados " + numeros);
}
ordenaNumeros();
