"use strict";
//Tuplas:
let peliculas = ["Batman Begin", true, 1990];
console.log(peliculas.length);
//peliculas.push("puedo entrar");//Este elemento puede entrar a la tupla pero
//al ser averce especificado solo tres elementos este no se contara como tal 
console.log(peliculas);
//Enum - enumeracion: es una informacion constante de solo lectura
var DatosPersonales;
(function (DatosPersonales) {
    DatosPersonales["nombre"] = "Daniel";
    DatosPersonales["dni"] = "54961700A";
    DatosPersonales["direccion"] = "Calle Bar\u00F3n del Soalr";
    DatosPersonales["ciudad"] = "Villanueva";
})(DatosPersonales || (DatosPersonales = {}));
;
console.log(DatosPersonales.nombre);
//Casteo
let texto_desconocido = "Esto viene en una peticion ajax";
let frase_final = texto_desconocido;
console.log(frase_final);
