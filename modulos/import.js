//importar un default
// no necesita llaves
/*import Usuario from "./export";
const user = new Usuario("santiago")
console.log(user.saludar());*/
// mezclar default con named

import Usuario, { sumar, multiplicar, restar } from "./export";
console.log(sumar(2, 3))       // 5
console.log(restar(10, 4))      // 6
console.log(multiplicar(3, 4))  // 12
const user = new Usuario("santiago")
console.log(user.saludar());

// si tuviera dos funciones con el mismo nombre y las importo aca
// uso as para diferenciar
/*

// Tenemos dos módulos con función 'formatear'
import { formatear as formatearTexto } from './texto.js'
import { formatear as formatearNumero } from './numero.js'
formatearTexto('hola mundo')  // usa la función de texto.js
formatearNumero(1234.5)        // usa la función de numero.js
*/