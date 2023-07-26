class Coche{
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
    constructor(
        protected marca:string,
        protected modelo:string,
        protected year:number,
        protected color:string,
        protected arrancado:boolean = false,
        protected velocidad:number = 0
        
    ){
        this.arrancado = false;
        this.velocidad = 0;
    }

    public set setColor(color:string){
        this.color = color;
    }

    public get getColor():string{
        return this.color;
    }

    arrancar():void{
        this.arrancado = true;
    }

    acelerar():void{
        this.velocidad += 5;
    }

    apagar():void{
        this.arrancado = false;
    }
    private mostrarCoche():string
    {
        return this.marca + " " + this.modelo;
    }

    private mostrarCualidades():string
    {
        return this.year + " " + this.color;
    }

    public mostrarTodo():string{
        return this.mostrarCoche() + " " + this.mostrarCualidades();
    }

    static saludar():string{
        return "ola ke ase";
    }
}

class Camioneta extends Coche{
    constructor(
        public marca:string,
        public modelo:string,
        public year:number,
        public color:string,
    ){
        super(marca,modelo,year,color);
    }
    public mostrar(){
        super.arrancar();
        return this.arrancado;
    }
}

let mi_coche:Coche = new Coche("Renault","Clio",2000,"Azul");
//mi_coche.arrancar();
mi_coche.acelerar();
console.log(mi_coche);
console.log(mi_coche.mostrarTodo());

let mi_camioneta:Camioneta = new Camioneta("Jeep","llanero",2000,"Azul");
console.log(mi_camioneta.mostrarTodo());