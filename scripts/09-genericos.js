"use strict";
// function mostrarMensaje(parametro:any){
//     return parametro;
// }
// console.log(mostrarMensaje("Hola que tal").replaceAll("tal","hace"));
// console.log(mostrarMensaje(12));
// console.log(mostrarMensaje(true));
//Funcion generica
function mostrarMensaje(parametro) {
    return parametro;
}
console.log(mostrarMensaje("Hola que tal").replace("tal", "hace"));
console.log(mostrarMensaje(12).toFixed(3));
console.log(mostrarMensaje(true));
