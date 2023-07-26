//Tuplas:
let peliculas:[string, boolean, number] = ["Batman Begin", true, 1990];
console.log(peliculas.length);
//peliculas.push("puedo entrar");//Este elemento puede entrar a la tupla pero
//al ser averce especificado solo tres elementos este no se contara como tal 
console.log(peliculas);

//Enum - enumeracion: es una informacion constante de solo lectura
enum DatosPersonales{
    nombre = "Daniel",
    dni = "54961700A",
    direccion ="Calle Barón del Soalr",
    ciudad = "Villanueva"
};

console.log(DatosPersonales.nombre);

//Casteo
let texto_desconocido:any = "Esto viene en una peticion ajax";
let frase_final:string = <string>texto_desconocido;
console.log(frase_final);