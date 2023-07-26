"use strict";
class Coche {
    /*
    marca:string;
    modelo:string;
    year:number;
    color:string;
    arrancado:boolean;
    velocidad:number;

    constructor(marca:string,modelo:string,year:number,color:string){
        this.marca = marca;
        this.modelo = modelo;
        this.year = year;
        this.color = color;
        this.arrancado = false;
        this.velocidad = 0;
    }
*/
    constructor(marca, modelo, year, color, arrancado = false, velocidad = 0) {
        this.marca = marca;
        this.modelo = modelo;
        this.year = year;
        this.color = color;
        this.arrancado = arrancado;
        this.velocidad = velocidad;
        this.arrancado = false;
        this.velocidad = 0;
    }
    set setColor(color) {
        this.color = color;
    }
    get getColor() {
        return this.color;
    }
    arrancar() {
        this.arrancado = true;
    }
    acelerar() {
        this.velocidad += 5;
    }
    apagar() {
        this.arrancado = false;
    }
    mostrarCoche() {
        return this.marca + " " + this.modelo;
    }
    mostrarCualidades() {
        return this.year + " " + this.color;
    }
    mostrarTodo() {
        return this.mostrarCoche() + " " + this.mostrarCualidades();
    }
    static saludar() {
        return "ola ke ase";
    }
}
class Camioneta extends Coche {
    constructor(marca, modelo, year, color) {
        super(marca, modelo, year, color);
        this.marca = marca;
        this.modelo = modelo;
        this.year = year;
        this.color = color;
    }
    mostrar() {
        super.arrancar();
        return this.arrancado;
    }
}
let mi_coche = new Coche("Renault", "Clio", 2000, "Azul");
//mi_coche.arrancar();
mi_coche.acelerar();
console.log(mi_coche);
console.log(mi_coche.mostrarTodo());
let mi_camioneta = new Camioneta("Jeep", "llanero", 2000, "Azul");
console.log(mi_camioneta.mostrarTodo());
