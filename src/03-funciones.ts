//Uso normal de tipos
function saludo(nombre:string):string {
    return "Un saludo para: " + nombre;
}

console.log(saludo("Daniel Arturo"));

//Tipo void
function mostrarFecha():void{
    console.log("20 - 04 - 2023");
}

mostrarFecha();

//Never / fin de la aplicacion
function finApp():never{
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
function mostrarPais(pais:string, continente?:string):string{
    return pais + " " + continente
}
console.log(mostrarPais("España"));

//Tipo funcion
let grupos:(datos:string[]) => string;//Esta definiendo una funcion con los tipos de datos que va a recibir
//y los tipos de datos que va a devovler

grupos = function(datos){
    return "Mis grupos favoritos son: " + datos.toString();
}

console.log(grupos(["Slipknot", "Disturbed", "Sirenia","Beyond the Black"]));

//Literales personalizados:

//literal
// function tekken(personaje:string, atuendo:"especial"| 1 | 2 | 3 | 4 ):string{
//     return `El personaje es: ${personaje} y lleva el atuendo: ${atuendo}`;
// }

//console.log(tekken("Tigre", 2));//cinco no es asignable

//Personalizado o alias
type traje = "especial"| 1 | 2 | 3 | 4 | "comprado"

function tekken(personaje:string, atuendo:traje):string{
    return `El personaje es: ${personaje} y lleva el atuendo: ${atuendo}`;
}

console.log(tekken("Tigre", "especial"));