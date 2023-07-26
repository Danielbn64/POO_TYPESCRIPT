function modificarMensaje(mostrar:boolean){
    return function info(target:Object, propertyKey:string, descriptor:any){
        if(mostrar){
            console.log(target, propertyKey, descriptor);
        }else{
            descriptor.value = function(){
                console.log("metodo bloqueado");
            }
        }
    }
}

//Decoradores para propiedades y parametros
function mi_propiedad(target:Object, propertyKey:string, parameterIndex:number){
    console.log("Esta propiedad está en la clase" + target.constructor.name + "y la propiedad se llama: " + propertyKey);
    console.log("Esta propiedad está en la clase" + target.constructor.name + "y la posicion del parametro es: " + parameterIndex)
}

class Ordenador{

    marca:string = "Asus";
    @modificarMensaje(true)
    encender(@mi_propiedad mensaje:string){
        console.log("Encendiendo...")
        console.log(mensaje)
    }
}

let pc = new Ordenador();
pc.encender("Estas en el pc de Daniel");