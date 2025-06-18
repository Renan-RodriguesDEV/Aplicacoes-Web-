alert("Seja bem vindo a nossa pagina")

let valor = window.document.getElementById("valor")
valor.addEventListener('click', function () {
    valor.innerText = "it sent"
    valor.style.background = "black"
})
valor.addEventListener('mouseenter', entrar)
valor.addEventListener('mouseout', sair)
function clicar() {
    valor.innerText = "it sent"
    valor.style.background = "black"
}
function entrar() {
    valor.style.background = "#007585"
    valor.style.borderColor = "#007585"
}
function sair() {
    valor.style.background = "green"
    valor.style.borderColor = "green"
}