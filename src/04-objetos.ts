// let empresa = {
//     nombre: "Microsoft",
//     sector: "Informatica",
//     servicios: ["Sistemas operativos","Ofimatica","Consolas"],
//     facturacion: 55_000_000_000
// }
//Este objeto no puede ser modificable en typscript a no ser que solos e modifique el valor
//de los datos

//Tipos de datos para objetos

type empresas = {
    nombre: string,
    sector: string,
    servicios: string[],
    facturacion: number,
    mostrar: () => string;
}; 
let empresa:empresas = {
    nombre: "Microsoft",
    sector: "Informatica",
    servicios: ["Sistemas operativos","Ofimatica","Consolas"],
    facturacion: 55_000_000_000,
    mostrar(){
        return this.nombre + " " + this.sector;
    }
};

console.log(empresa.mostrar());