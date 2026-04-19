/*
async declara que una función es asíncrona
await pausa la ejecución hasta que una Promise se resuelva
*/
//Con Promises (funcional pero verboso)
function obtenerDatos() {
    return fetch('/api/datos')
        .then(response => response.json())
        .then(datos => {
            console.log(datos)
            return datos
        })
        .catch(error => {
            console.log('Error:', error)
        })
}

//  Con async/await (mucho más limpio)
async function obtenerDatos() {
    try {
        const response = await fetch('/api/datos')
        const datos = await response.json()
        console.log(datos)
        return datos
    } catch (error) {
        console.log('Error:', error)
    }
}

// una funcion async siempre devuelve una promesa
async function miFuncion() {
    return 42;
}

console.log(miFuncion()) // Promise { <pending> }

miFuncion().then(resultado => {
    console.log(resultado)
}) // 42

// o con await
const resultado = await miFuncion()
console.log(resultado) // 42
// Note: Solo puedes usar await dentro de funciones async


//Note: await pausa la ejecucion hasta que la Promise se resuelva
async function miFuncion() {
    await new Promise(resolve => setTimeout(resolve, 1000))
    // hasta que no pasa un segundo,
    // no se ejecuta la siguiente línea
    return 42
}

async function ejecutar() {
    console.time('miFuncion')
    await miFuncion() // 42
    console.timeEnd('miFuncion')
    // miFuncion: 1000.004ms (1 segundo)
}

ejecutar()

// secuencial 

/*
async function cargarPerfilSecuencial(userId) {
  console.time('Perfil Lento');

  // 1. Pido los datos del usuario y espero...
  const usuario = await api.getUsuario(userId); // tarda 1 segundo
  // 2. Cuando terminan, pido sus amigos y espero...
  const amigos = await api.getAmigos(userId); // tarda 1 segundo
  // 3. Cuando terminan, pido sus posts y espero...
  const posts = await api.getPosts(userId); // tarda 2 segundos
  
  console.timeEnd('Perfil Lento'); // Suma el tiempo de las 3 llamadas
  // Tiempo total: 4 segundos
  console.log('Datos cargados secuencialmente:', { usuario, amigos, posts });
}
*/
async function cargarPerfilParalelo(userId) {
    console.time('Perfil más rápido')

    // Iniciamos todas las operaciones al mismo tiempo
    // y esperamos a que todas terminen
    const [usuario, amigos, publicaciones] = await Promise.all([
        obtenerInfoBasica(userId), // tarda 1 segundo
        obtenerAmigos(userId),  // tarda 1 segundo
        obtenerPublicaciones(userId) // tarda 2 segundos
    ])

    console.timeEnd('Perfil más rápido')
    // Tiempo total: 2 segundos

    return {
        usuario,
        amigos,
        publicaciones
    }
}

cargarPerfilParalelo(123).then(perfil => {
    console.log('Perfil cargado:', perfil.usuario.nombre)
    console.log('Amigos:', perfil.amigos.length)
    console.log('Publicaciones:', perfil.publicaciones.length)
})