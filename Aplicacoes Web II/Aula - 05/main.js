var data = new Date();
console.log(
  `Estamos em ${data}`
);

// Pegando valores de datas
var ano = data.getFullYear();
var dia = data.getDate();
var mes = data.getMonth() + 1;
var hora = data.getHours();
var minutos = data.getMinutes();
var segundos = data.getSeconds();
var milisegundos = data.getMilliseconds();

console.log(
  `Estamos no ano de: ${ano}/${mes}/${dia} - ${hora}:${minutos}:${segundos}`
);

// Setando valores de datas
var nova = new Date(data.setHours(16));
nova.setFullYear(2014);
nova.setDate(20); // dia 20
nova.setMonth(1); // mes 2 (fev)
nova.setDate(nova.getDate()+5); // dia 25
console.log(nova);
