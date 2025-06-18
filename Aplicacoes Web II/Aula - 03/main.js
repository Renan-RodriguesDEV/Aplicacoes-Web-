let lista = [1, 2, 3, 4, 5];
lista2 = [1, 2, 3, 4, 5];
console.log(lista);

lista.push(10); // add

function myfunc(x) {
  return x * 2;
}
lista3 = lista.map(myfunc); // aplica uma funcao para a lista inteira
console.log(`lista 3: ${lista3}`);
console.log(`lista 1: ${lista}`);
lista4 = lista2.join("\n"); // separa por um caracter ou outros
console.log(`lista 2: ${lista2}`);
console.log(`lista 4: ${lista4}`);

lista.shift(); // remove o primeiro elemento da lista
lista.unshift(10); // add um elemento ao inicio da lista
console.log(`lista adicionada ${lista}`);
for (let i = 0; i < lista.length; i++) {
  lista.pop(); // remove o ultimo elemento da lista
  console.log(lista);
}

// exibe elementos da lista
lista.forEach(function (o) {
  console.log(o);
});
console.log(lista.fill(0, 0, 10)); // preenche a lista
l3 = ["zico", "xuxa", "pelé", "asdrubal"];
l4 = [2, 4, 1, 2, 6, 7];
console.log(l3.sort()); // ordena a lista de nomes
// console.log(l4.sort((a, b) => a - b)); // ordena a lista de numeros
console.log(l3.reverse()); // ordena a lista reversamente

let frutas = ["banana", "abobora", "melao", "tomato"];
frutas.splice(4, 0, "melancia"); // add no (indice), (sem remover) (item)
console.log(frutas);
str = frutas.slice(2, 1, 4);
console.log(str);

function ordenar(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let aux = arr[i];
        arr[i] = arr[j];
        arr[j] = aux;
      }
    }
  }
  return arr;
}
ll = ordenar(l4);
console.log(ll);
