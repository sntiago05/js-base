//Fetch es una API moderna del navegador que permite hacer peticiones HTTP de forma sencilla
// y está basado completamente en Promises.

// estructura basica de fetch
/*
fetch(url) - Le decimos al mensajero: "Ve a esta dirección"
.then(response =>...) - "Cuando vuelvas, dame lo que encontraste"
.json() - "Y por favor, tradúcelo a un formato que pueda entender"
.then(data =>...) - "Cuando esté traducido, úsalo"
.catch(error =>...) - "Si algo sale mal, avísame"*/
/*
fetch(url, opciones)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error))
*/

fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => {
        console.log("Respuesta recibida", response.status);
        return response.json()
    })
    .then(data => {
        console.log("Datos obtenidos");
        console.log("titulo:", data.title);
        console.log("contenido:", data.body);
    }).catch(error => {
        console.log("error", error);
    })

fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => {
        console.log('Información de la respuesta:')
        console.log('Estado:', response.status)      // 200, 404, 500, etc.
        console.log('OK:', response.ok)              // true si status 200-299
        console.log('URL:', response.url)
        console.log('Headers:', response.headers)

        // Verificar si la respuesta es exitosa
        if (response.ok) {
            return response.json()
        } else {
            throw new Error(`Error HTTP: ${response.status}`)
        }
    })
    .then(user => {
        console.log('Usuario:', user.name)
        console.log('Email:', user.email)
    })
    .catch(error => {
        console.log('Error:', error.message)
    })

/*.json()	    Convierte a objeto JavaScript	📊 Cuando esperas datos estructurados (APIs)
.text()	        Obtiene como texto plano	📝 Para HTML, CSS, texto simple
.blob()	        Para archivos binarios	🖼️ Imágenes, videos, archivos
.arrayBuffer()	Para datos binarios crudos	🔧 Manipulación avanzada de archivos
.formData()	    Para formularios	📋 Datos de formularios HTML */