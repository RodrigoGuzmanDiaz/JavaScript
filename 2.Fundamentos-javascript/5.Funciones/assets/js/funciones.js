//ahora vamos a ver la sintaxis basica de una funcion
function saludar(){
    console.log("Hola Mundo");
}

saludar(); //llamamos a la funcion para que se ejecute

/*
Como sabemos donde poner las funciones?
Las funciones se pueden declarar en cualquier parte del codigo
ya que si ponemos la funcion antes o despues de su llamada, el codigo funcionara correctamente,
pero es recomendable declararlas al inicio del archivo o en un archivo aparte para tener un mejor orden
*/

// otra forma de declarar funciones es usando funciones anonimas
// estas funciones no tienen nombre y se asignan a una variable
// de esta forma
// la firma es la siguiente: var nombreDeLaVariable = function(){codigo a ejecutar}
// la funciones anonimas a diferencia de las funciones declaradas no se pueden invocar antes de su declaracion
// y ademas no se pueden reutilizar si no es a traves de la variable a la que estan asignadas 
const despedir = function(){
    console.log("Adios Mundo");
}

//llamamos a la funcion anonima
despedir();

// tambien podemos pasar argumentos a las funciones
function saludarPersona(nombre){
    console.log("Hola " + nombre);
}

