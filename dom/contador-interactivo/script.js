let contador = 0
const buttonIncrementar = document.querySelector("#incrementar")
const buttonDecrementar = document.querySelector("#decrementar")
const buttonReset = document.querySelector("#reset")
const elementNumero = document.querySelector("#contador")

function actualizarContador() {
    elementNumero.textContent = contador
    if (contador < 0) {
        elementNumero.style.color = "red";
    } else if (contador > 0) {
        elementNumero.style.color = "green";
    } else {
        elementNumero.style.color = "black";
    }
}

buttonIncrementar.addEventListener("click", () => {
    contador++
    actualizarContador()
})

buttonDecrementar.addEventListener("click", () => {
    contador--
    actualizarContador()
})
buttonReset.addEventListener("click", () => {
    contador = 0
    actualizarContador()
})
