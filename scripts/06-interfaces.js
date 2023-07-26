"use strict";
;
//Interface para una clase
class Fifa {
    constructor(titulo, categoria, edad, duracion, lanzado) {
        this.titulo = titulo;
        this.categoria = categoria;
        this.edad = edad;
    }
    mostrar() {
        console.log(this.titulo, this.categoria, this.edad);
    }
    actualizar(consola) {
        console.log("buscando actualizaciones...");
        return "Actualizado";
    }
}
let fifa23 = new Fifa("fifa 23", "Futbol", 5, 25, true);
console.log(fifa23.mostrar());
//Interface a nivel de objeto literal
let gta = {
    titulo: "GTA 5",
    categoria: "Accion",
    edad: 18,
    //duracion: 200,
    lanzado: true,
    mostrar() {
        console.log(this.titulo, this.categoria, this.edad);
    },
    actualizar(consola) {
        console.log("buscando actualizaciones...");
        return "Actualizado";
    }
};
console.log(gta);
