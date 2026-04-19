/*
GET: para leer
POST: para crear
PUT: para reemplazar todo
PATCH: para modificar una parte especifica
DELETE: para borrar
*/

//GET es el mas comun y por defecto se ejecuta en fetch

fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`)
        }
        return response.json()
    })
    .then(usuarios => {
        console.log('Usuarios obtenidos:', usuarios.length)
        usuarios.slice(0, 3).forEach(user => {
            console.log(`- ${user.name} (${user.email})`)
        });
    })
    .catch(error => {
        console.log("Error obtenieno usuarios", error.message);
    })

// NOTE: el segundo parametro de fetch nos permite configurar la peticion
// POST
/*
fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "post",
    headers: {
        "Content-type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify({
        title: "Mi primer post con fetch",
        body: "Este es el contenido del post creado con java script",
        userId: 50
    })
})*/

function crearPost() {
    const nuevoPost = {
        title: "Mi primer post con fetch santiago",
        body: "Este es el contenido de mi post creado desde javascript",
        userId: 5
    }
    return fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(nuevoPost)
    }).then(response => {
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`)
        }
        return response.json()
    }).then(post => {
        console.log('Post creado exitosamente:')
        console.log('ID:', post.id)
        console.log('Título:', post.title)
    }).catch(error => {
        console.log('error creando post:', error.message)
    })
}
crearPost()

//PUT

function actualizarPost(id) {
    const postActualizado = {
        id: id,
        title: 'Post actualizado con PUT',
        body: 'Este contenido ha sido completamente reemplazado',
        userId: 1
    }
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(postActualizado)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`)
            }
            return response.json()
        })
        .then(postActualizado => {
            console.log('Post actualizado:', postActualizado.title)
        })
        .catch(error => {
            console.log('Error actualizando:', error.message)
        })
}

actualizarPost(1)

// PATCH
// Actualizar solo el título
function actualizarTitulo(id, nuevoTitulo) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            title: nuevoTitulo
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`)
            }
            return response.json()
        })
        .then(resultado => {
            console.log('Título actualizado:', resultado.title)
            return resultado
        })
        .catch(error => {
            console.log('Error:', error.message)
        })
}

actualizarTitulo(1, 'Nuevo título con PATCH')

// DELETE
function eliminarPost(id) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'DELETE'
    }).then(response => {
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`)
        }

        // DELETE generalmente no devuelve contenido útil
        if (response.status === 200) {
            console.log(`Post ${id} eliminado exitosamente`)
        }

        return response
    })
        .catch(error => {
            console.log('Error:', error.message)
        })
}

eliminarPost(1)

// codigos de error
function peticionConManejorDeErrores(url) {
    return fetch(url)
        .then(response => {
            // Fetch NO rechaza la promesa para códigos 4xx o 5xx
            // Pero si puedes verificar si todo salió bien con response.ok
            if (!response.ok) {
                // Manejar diferentes tipos de error
                switch (response.status) {
                    case 404:
                        throw new Error('Recurso no encontrado')
                    case 401:
                        throw new Error('No autorizado')
                    case 403:
                        throw new Error('Acceso prohibido')
                    case 500:
                        throw new Error('Error interno del servidor')
                    default:
                        throw new Error(`Error HTTP: ${response.status}`)
                }
            }

            return response.json()
        })
        .then(data => {
            console.log('Datos obtenidos:', data)
            return data
        })
        .catch(error => {
            if (error.name === 'TypeError') {
                console.log('Error de conexión:', error.message)
            } else {
                console.log('Error:', error.message)
            }
        })
}

// Probar con URL que no existe
peticionConManejorDeErrores('https://jsonplaceholder.typicode.com/posts/999999')