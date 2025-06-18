// setInterval() -> é executado em loop de acordo com seu timing
function action() {
  document.write("Sex0 batman, eles estão falando de sex0<br>");
}

// Lambda function
var time = prompt("quantidade de pikas diarias?");
if (time == null || time === "0") {
  time = 3 * 1000;
  var msg = "Mentira seu mlk safado do krlho";
} else {
  var msg = "Sex0 batman, eles estão transando KKK <br>";
  time *= 1000;
}
setInterval(() => {
  document.write(msg);
}, parseInt(time));

// setTimeout() -> é executado apenas uma vez após seu timing
setTimeout(() => {
  document.write("esse é o timeout");
}, 5000);
