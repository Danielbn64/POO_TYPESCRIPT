interface Videojuego{
    titulo:string;
    categoria:string;
    edad:number;
    duracion?:number; //propiedad opcional
    lanzado?:boolean;
    mostrar():void;
    actualizar(consola:string):String;
};
//Interface para una clase
class Fifa implements Videojuego{
    constructor(
        public titulo:string,
        public categoria:string,
        public edad:number,
        duracion?:number,
        lanzado?:boolean,
    ){}

    mostrar():void{
        console.log(this.titulo,this.categoria,this.edad);
    }

    actualizar(consola:string):string{
        console.log("buscando actualizaciones...");
        return "Actualizado";
    }
}

let fifa23:Videojuego = new Fifa("fifa 23","Futbol", 5, 25, true);
console.log(fifa23.mostrar());

//Interface a nivel de objeto literal
let gta:Videojuego = {
    titulo:"GTA 5",
    categoria: "Accion",
    edad: 18,
    //duracion: 200,
    lanzado: true,
    mostrar() {
        console.log(this.titulo,this.categoria,this.edad);
    },
    actualizar(consola){
        console.log("buscando actualizaciones...");
        return "Actualizado";
    }
};

console.log(gta);