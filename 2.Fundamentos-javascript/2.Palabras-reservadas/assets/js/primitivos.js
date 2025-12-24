let nombre = "Peter Parker";
console.log( nombre);
console.log(typeof nombre) // tipeof sirve para conocer el tipo de dato de una variable dentro de los parentesis el valor a evaluar
console.log(`el tipo de dato de ${nombre} es: ${typeof nombre}`)

nombre = 'Ben Parker';
console.log( nombre);
console.log(`el tipo de dato de ${nombre} es: ${typeof nombre }`)

// ahora vamos a ver las tres formas de reinicilizar una variable de tipo string usando comillas simples '', dobles "" y backticks ``
nombre = 'Tia May';// comillas simples
nombre = "Tia May";// comillas dobles
nombre = `Tia May`;// comillas backtick o invertidas

//ahora vamos a ver reinicializar el string a un valor numerico
nombre = 1234;
console.log(nombre);
console.log(`el tipo de dato de ${nombre} es: ${typeof nombre }`)
//redordemos que Javascript es de tipado debil por lo tanto permite cambiar el tipo de dato de una variable en cualquier momento

let isMarvel = true; // tipo de dato boolean, esto no lo tenemos que poner entre comillas porque si lo ponemos entre comillas se convierte en un string aunque su valor sea true o false, es por eso que hay que ponerlo sin comillas para que true o false sea reconocidos como boolean
console.log(isMarvel);
console.log(`el tipo de dato de ${isMarvel} es: ${typeof isMarvel }`)

let edad = 33; // tipo de dato number
console.log(edad);
console.log(`el tipo de dato de ${edad} es: ${typeof edad }`)

edad = 33.5; // tipo de dato number con decimales
console.log(edad);
console.log(`el tipo de dato de ${edad} es: ${typeof edad }`)

let superPoder; //recordemos que una variable que no ha sido inicializada tiene el tipo de dato undefined, ya que no tiene ningun valor asignado
console.log(superPoder);
console.log(`el tipo de dato de ${superPoder} es: ${typeof superPoder }`)


let soyNull = null; // null es un tipo de dato especial que representa la ausencia intencional de cualquier valor, es diferente a undefined, porque undefined significa que una variable ha sido declarada pero no se le ha asignado ningun valor, mientras que null es un valor asignado que indica la ausencia de valor
// es importante mencionar que null en javascript es considerado un objeto, lo cual es un comportamiento historico del lenguaje
// la diferencia principal entre null y undefined es que null es un valor asignado intencionalmente para indicar la ausencia de valor, mientras que undefined indica que una variable ha sido declarada pero no se le ha asignado ningun valor
// las situaciones ideales para usar null o undefined son las siguientes:
// usar null cuando queremos indicar que una variable debe tener un valor pero actualmente no lo tiene, por ejemplo, cuando estamos esperando que un usuario proporcione informacion
// usar undefined cuando queremos indicar que una variable ha sido declarada pero aun no se le ha asignado ningun valor, por ejemplo, cuando estamos definiendo una variable que sera inicializada mas adelante en el codigo
console.log(soyNull);
console.log(`el tipo de dato de ${soyNull} es: ${typeof soyNull }`) //aqui vemos que typeof null devuelve 'object', lo cual es un comportamiento historico de javascript y puede ser confuso, pero es importante entender que null representa la ausencia de valor a pesar de que typeof lo clasifique como un objeto

let simbolo1 = Symbol('a');  // los simbolos son un tipo de dato primitivo unico e inmutable que se utiliza para crear identificadores unicos para propiedades de objetos
let simbolo2 = Symbol('a'); // aunque ambos simbolos tienen la misma descripcion 'a', son unicos y diferentes entre si

console.log(simbolo1 === simbolo2); // esto devolvera false porque cada simbolo es unico

console.log(`el tipo de dato de simbolo1 es: ${typeof simbolo1 }`) 
console.log(`el tipo de dato de ${simbolo2} es: ${typeof simbolo2 }`) //esto deolvera un error porque los simbolos no se pueden convertir directamente a string para concatenacion, recordemos que los simbolos son unicos y no tienen una representacion string directa

//recordemos que en Javascript existen 7 tipos de datos primitivos: string, number, boolean, undefined, null, symbol y bigint
// Y por cierto en JAvascript el estandar para nombrar las variables es camelCase, es decir, la primera palabra en minuscula y las siguientes palabras con la primera letra en mayuscula, sin espacios ni guiones bajos
// en el caso de los otros lenguajes de programacion como Python se utiliza el estandar snake_case, es decir, todas las palabras en minuscula separadas por guiones bajos,
// en otros lenguajes como C# se utiliza el estandar PascalCase, es decir, todas las palabras con la primera letra en mayuscula y sin espacios ni guiones bajos
// en java para varaibles se utiliza camelCase y para clases se utiliza PascalCase
