"use strict";
//Uso normal de tipos
function saludo(nombre) {
    return "Un saludo para: " + nombre;
}
console.log(saludo("Daniel Arturo"));
//Tipo void
function msotrarFecha() {
    console.log("20 - 04 - 2023");
}
msotrarFecha();
//Never / fin de la aplicacion
function finApp() {
    throw new Error("La aplicacion se ha cerrado...");
}
//finApp(); Se acaba la aplicacion
//Parametros y funciones
// function mostrarPais(pais:string = "España", continente:string = "Europa"):string{
//     return pais + " " + continente
// }
//console.log(mostrarPais("España","Europa"));
//console.log(mostrarPais());//Parametros opcionales
//Indicar si un parametro no es obligatorio
function mostrarPais(pais, continente) {
    return pais + " " + continente;
}
console.log(mostrarPais("España"));
//Tipo funcion
let grupos; //Esta definiendo una funcion con los tipos de datos que va a recibir
//y los tipos de datos que va a devovler
grupos = function (datos) {
    return "Mis grupos favoritos son: " + datos.toString();
};
console.log(grupos(["Slipknot", "Disturbed", "Sirenia", "Beyond the Black"]));
function tekken(personaje, atuendo) {
    return `El personaje es: ${personaje} y lleva el atuendo: ${atuendo}`;
}
console.log(tekken("Tigre", "especial"));
