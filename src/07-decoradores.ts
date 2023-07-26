// function proyectar(constructor:Function){
//     console.log("Proyectando la pelicula")
// }
function mostrarMensajePelicula(){
    console.log("Proyectando la pelicula...");
}

//function proyectar(activar:boolean){
function proyectar(metadatos:any){
    return (constructor:Function) =>{
        constructor.prototype.hacerProyeccion = function():void{
            //parametro boolean
            // if(activar){
            //     console.log("Proyectando la pelicula: ",this.titulo)
            // }else{
            //     console.log("Cine cerrado x")
            // }

            if(metadatos.activar){
                console.log("Proyectando la pelicula: ",this.titulo)
            }else{
                console.log("Cine cerrado x")
            }
        }

        constructor.prototype.agregarASeleccion = function():string[]{
          let peliculas = metadatos.seleccion;
          peliculas.push(this.titulo);
          return peliculas;
        }
    };
}

//@proyectar(true) activar boolean
@proyectar({
    activar:true,
    seleccion: ["Superman","Gran Torino","Spiderman 3"]

})
class Pelicula{
    constructor(
        public titulo:string,
        public genero:string,
        public proyectar:boolean
    ){}
}

// let batman = new Pelicula("Batman Begins", "Accion", false);//casteo
// (<any>batman).hacerProyeccion();

let batman:any = new Pelicula("Batman Begins", "Accion", false);
batman.hacerProyeccion();
console.log(batman.agregarASeleccion());