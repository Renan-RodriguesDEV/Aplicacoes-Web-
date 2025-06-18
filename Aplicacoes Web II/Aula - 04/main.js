function alterText() {
  var textPage = document.getElementById("text");
  console.log(textPage.value);
  var textAlter = textPage.value;
  // split divide e trasforma p texto em um array
  // reverse ordena aos contrario
  // join mescla o array em uma string
  var alterado = String(textAlter).split("").reverse().join("");
  console.log(alterado);

  textPage.value = alterado;
}
