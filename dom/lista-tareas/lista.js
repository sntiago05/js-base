const nuevaTarea = document.querySelector("#nueva-tarea")
const buttonAgregar = document.querySelector("#agregar")
const lista = document.querySelector("#todo-list")

function agregarTarea() {
    const texto = nuevaTarea.value.trim()
    if (texto === "") {
        alert("Porfavor ingresa el nombre de una tarea")
        return
    }
    const item = document.createElement("li")
    const itemText = document.createElement("span")
    const buttonEliminar = document.createElement("button")

    itemText.textContent = texto
    buttonEliminar.textContent = "eliminar"
    buttonEliminar.classList.add('btn-eliminar','btn','btn-danger')
    

    item.appendChild(itemText)
    item.appendChild(buttonEliminar)

    lista.appendChild(item)
    buttonEliminar.addEventListener("click", () => {
        item.remove()
    })
}

buttonAgregar.addEventListener("click", agregarTarea)
nuevaTarea.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        agregarTarea()
    }
})