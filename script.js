function calcular(num1, num2, operacion) {
  const resultado = operacion(num1, num2)
  console.log('El resultado es: ' + resultado)
  return resultado
}

console.log(calcular(10,2,function(a,b){
    return a/b
}));

console.log(calcular(5,2,(a,b) => a**b));

function repetirAccion(veces, accion) {
  for (let i = 1; i <= veces; i++) {
    accion(i)
  }
}

repetirAccion(3, function(numero){
    console.log(numero);
    
})
repetirAccion(5, function(numero) {
  console.log('⭐'.repeat(numero))
})