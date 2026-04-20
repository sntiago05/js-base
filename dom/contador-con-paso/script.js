let contador = 0
const numeroElement = document.querySelector('#numero')
const btnIncrementar = document.querySelector('#incrementar')
const btnDecrementar = document.querySelector('#decrementar')
const btnReset = document.querySelector('#reset')
const inputPaso = document.querySelector('#paso')

function actualizarContador() {
    numeroElement.textContent = contador
    numeroElement.className = ""

    if (contador > 0) {
        numeroElement.className = "positivo"
    } else if (contador < 0) {
        numeroElement.className = "negativo"
    }
}

btnIncrementar.addEventListener("click", () => {
    const paso = parseInt(inputPaso.value) || 1
    contador += paso
    actualizarBtn(paso)
    actualizarContador()
})
btnDecrementar.addEventListener("click", () => {
    const paso = parseInt(inputPaso.value) || 1
    contador -= paso
    actualizarBtn(paso)
    actualizarContador()
})
btnReset.addEventListener('click', () => {
    contador = 0
    inputPaso.value = 1
    actualizarBtn(1)
    actualizarContador()
})

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp") {
        e.preventDefault()
        contador++
        actualizarContador()
    } else if (e.key === "ArrowDown") {
        e.preventDefault()
        contador--
        actualizarContador()
    } else if (e.key === "r" || e.key === "R") {
        contador = 0
        inputPaso.value = 0
        actualizarContador()
    }
})
function actualizarBtn(paso) {
    btnIncrementar.textContent = `+${paso}`
    btnDecrementar.textContent = `-${paso}`
}