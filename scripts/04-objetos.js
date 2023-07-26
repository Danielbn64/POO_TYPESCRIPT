"use strict";
// let empresa = {
//     nombre: "Microsoft",
//     sector: "Informatica",
//     servicios: ["Sistemas operativos","Ofimatica","Consolas"],
//     facturacion: 55_000_000_000
// }
//Este objeto no puede ser modificable en typscript a no ser que solos e modifique el valor
//de los datos
let empresa = {
    nombre: "Microsoft",
    sector: "Informatica",
    servicios: ["Sistemas operativos", "Ofimatica", "Consolas"],
    facturacion: 55000000000,
    mostrar() {
        return this.nombre + " " + this.sector;
    }
};
console.log(empresa.mostrar());
