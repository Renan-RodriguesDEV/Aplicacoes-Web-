// Funções nativas de Arrays em JavaScript

// 1. push(): Adiciona um ou mais elementos ao final do array
let arr = [1, 2, 3];
arr.push(4, 5);
console.log(arr); // [1, 2, 3, 4, 5]

// 2. pop(): Remove o último elemento do array e o retorna
let lastElement = arr.pop();
console.log(lastElement); // 5
console.log(arr); // [1, 2, 3, 4]

// 3. unshift(): Adiciona um ou mais elementos no início do array
arr.unshift(0);
console.log(arr); // [0, 1, 2, 3, 4]

// 4. shift(): Remove o primeiro elemento do array e o retorna
let firstElement = arr.shift();
console.log(firstElement); // 0
console.log(arr); // [1, 2, 3, 4]

// 5. indexOf(): Retorna o índice da primeira ocorrência de um elemento no array
console.log(arr.indexOf(3)); // 2

// 6. lastIndexOf(): Retorna o índice da última ocorrência de um elemento no array
arr.push(2);
console.log(arr.lastIndexOf(2)); // 4

// 7. slice(): Retorna uma cópia de parte do array
let slicedArr = arr.slice(1, 3);
console.log(slicedArr); // [2, 3]

// 8. splice(): Altera o conteúdo de um array removendo ou substituindo elementos existentes e/ou adicionando novos elementos
arr.splice(2, 1, 'a', 'b');
console.log(arr); // [1, 2, 'a', 'b', 4, 2]

// 9. forEach(): Executa uma função para cada elemento do array
arr.forEach((item, index) => console.log(`Item ${item} no índice ${index}`));

// 10. map(): Cria um novo array com o resultado da chamada de uma função para cada elemento do array
let doubled = arr.map(item => typeof item === 'number' ? item * 2 : item);
console.log(doubled); // [2, 4, 'a', 'b', 8, 4]

// 11. filter(): Cria um novo array com todos os elementos que passam no teste implementado pela função fornecida
let numbers = arr.filter(item => typeof item === 'number');
console.log(numbers); // [1, 2, 4, 2]

// 12. reduce(): Executa uma função reducer para cada elemento do array, resultando num único valor de retorno
let sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 9

// 13. some(): Testa se pelo menos um elemento no array passa no teste implementado pela função fornecida
console.log(arr.some(item => typeof item === 'string')); // true

// 14. every(): Testa se todos os elementos no array passam no teste implementado pela função fornecida
console.log(arr.every(item => typeof item === 'number')); // false

// 15. find(): Retorna o valor do primeiro elemento no array que satisfaz a função de teste provida
console.log(arr.find(item => typeof item === 'string')); // 'a'

// 16. findIndex(): Retorna o índice do primeiro elemento no array que satisfaz a função de teste provida
console.log(arr.findIndex(item => typeof item === 'string')); // 2

// 17. includes(): Determina se um array inclui um determinado elemento, retornando true ou false
console.log(arr.includes('b')); // true

// 18. join(): Junta todos os elementos de um array em uma string
console.log(arr.join(', ')); // "1, 2, a, b, 4, 2"

// 19. reverse(): Inverte a ordem dos elementos de um array
arr.reverse();
console.log(arr); // [2, 4, 'b', 'a', 2, 1]

// 20. sort(): Ordena os elementos de um array in place e retorna o array
arr.sort();
console.log(arr); // [1, 2, 2, 4, 'a', 'b']

// Funções nativas de Strings em JavaScript

let str = "Hello, World!";

// 1. charAt(): Retorna o caractere no índice especificado
console.log(str.charAt(0)); // 'H'

// 2. charCodeAt(): Retorna o valor Unicode do caractere no índice especificado
console.log(str.charCodeAt(0)); // 72

// 3. concat(): Concatena o texto de uma ou mais strings e retorna uma nova string
console.log(str.concat(" How are you?")); // "Hello, World! How are you?"

// 4. indexOf(): Retorna o índice da primeira ocorrência de um valor especificado em uma string
console.log(str.indexOf('o')); // 4

// 5. lastIndexOf(): Retorna o índice da última ocorrência de um valor especificado em uma string
console.log(str.lastIndexOf('o')); // 7

// 6. slice(): Extrai uma parte de uma string e retorna uma nova string
console.log(str.slice(0, 5)); // "Hello"

// 7. split(): Divide uma string em um array de substrings
console.log(str.split(', ')); // ["Hello", "World!"]

// 8. substring(): Retorna a parte da string entre os índices inicial e final
console.log(str.substring(7, 12)); // "World"

// 9. toLowerCase(): Converte uma string para letras minúsculas
console.log(str.toLowerCase()); // "hello, world!"

// 10. toUpperCase(): Converte uma string para letras maiúsculas
console.log(str.toUpperCase()); // "HELLO, WORLD!"

// 11. trim(): Remove espaços em branco de ambas as extremidades de uma string
let paddedStr = "  trim me  ";
console.log(paddedStr.trim()); // "trim me"

// 12. replace(): Substitui uma substring especificada com outra substring
console.log(str.replace('World', 'JavaScript')); // "Hello, JavaScript!"

// 13. startsWith(): Determina se uma string começa com os caracteres de uma string especificada
console.log(str.startsWith('Hello')); // true

// 14. endsWith(): Determina se uma string termina com os caracteres de uma string especificada
console.log(str.endsWith('!')); // true

// 15. includes(): Determina se uma string contém os caracteres de uma string especificada
console.log(str.includes('World')); // true

// Funções nativas de Números em JavaScript

let num = 3.14159;

// 1. toFixed(): Formata um número usando notação de ponto fixo
console.log(num.toFixed(2)); // "3.14"

// 2. toPrecision(): Retorna uma string representando o número com um comprimento especificado
console.log(num.toPrecision(4)); // "3.142"

// 3. toString(): Retorna uma string representando o número especificado
console.log(num.toString()); // "3.14159"

// 4. parseInt(): Analisa uma string e retorna um inteiro
console.log(parseInt("42")); // 42

// 5. parseFloat(): Analisa uma string e retorna um número de ponto flutuante
console.log(parseFloat("3.14")); // 3.14

// 6. isNaN(): Determina se um valor é NaN (Not-a-Number)
console.log(isNaN(NaN)); // true

// 7. isFinite(): Determina se um valor é um número finito
console.log(isFinite(42)); // true

// 8. Math.abs(): Retorna o valor absoluto de um número
console.log(Math.abs(-5)); // 5

// 9. Math.round(): Arredonda um número para o inteiro mais próximo
console.log(Math.round(4.7)); // 5

// 10. Math.ceil(): Arredonda um número para cima para o próximo inteiro
console.log(Math.ceil(4.3)); // 5

// 11. Math.floor(): Arredonda um número para baixo para o inteiro anterior
console.log(Math.floor(4.7)); // 4

// 12. Math.max(): Retorna o maior de zero ou mais números
console.log(Math.max(1, 3, 2)); // 3

// 13. Math.min(): Retorna o menor de zero ou mais números
console.log(Math.min(1, 3, 2)); // 1

// 14. Math.random(): Retorna um número pseudoaleatório entre 0 e 1
console.log(Math.random());

// 15. Math.pow(): Retorna a base elevada ao expoente
console.log(Math.pow(2, 3)); // 8

// 16. Math.sqrt(): Retorna a raiz quadrada de um número
console.log(Math.sqrt(9)); // 3