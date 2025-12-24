//ahora vamos a ver la sintaxis basica de una funcion
function saludar1(){
    console.log("Hola Mundo");
}

saludar1(); //llamamos a la funcion para que se ejecute

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
// con funciones normales
function saludarPersona(nombre){
    console.log(arguments); // objeto especial que contiene todos los argumentos pasados a la funcion
    console.log("Hola " + nombre);
}
saludarPersona("Sora");
saludarPersona("Kairi", 15, "Islas del Destino"); // solo se toma el primer argumento, esto no devuelve un error pero es importante tener en cuenta que solo se usaran los argumentos definidos en la firma de la funcion
//se pueden ver los argumentos extras con el objeto arguments dentro de la funcion

// En esta línea, 'nombre' y 'saludo' son PARÁMETROS
function saludarDos(nombre, saludo) {
    return 10
    //esto nunca se va a ejecutar porque esta despues del return, cuando js lee el return ignora lo que sigue despues del return
    console.log(saludo + ", " + nombre);
    
}

// En esta línea, "Mundo" y "Hola" son ARGUMENTOS
saludarDos("Mundo", "Hola"); // Salida: Hola, Mundo



// con funciones anonimas
const despedirPersona = function(nombre){
    console.log("Adios " + nombre);
}
despedirPersona("Riku");


//funciones con valor de retorno
function sumarDosParemetros(a, b){
    return a + b; // la palabra reservada return devuelve un valor y termina la ejecucion de la funcion
}
console.log(sumarDosParemetros(5, 3)); //8

//funciones anonimas con valor de retorno
const restar = function(a, b){
    return a - b;
}  
console.log(restar(10, 4)); //6

// ============================================
// FUNCIONES FLECHA (Arrow Functions) - ES6
// ============================================
// Las arrow functions son una forma más corta de escribir funciones anonimas
// Sintaxis: (parametros) => { cuerpo de la función }

// 1️⃣ MÚLTIPLES PARÁMETROS - PARÉNTESIS OBLIGATORIOS
// Regla: Con 2 o más parámetros SIEMPRE necesitas paréntesis
const multiplicar = (num1, num2) => {
    return num1 * num2;  // Return EXPLÍCITO (con llaves = múltiples líneas)
};
console.log(multiplicar(5, 4));  // 20

// 2️⃣ UN SOLO PARÁMETRO - PARÉNTESIS OPCIONALES
// Regla: Con exactamente 1 parámetro puedes omitir los paréntesis
const cuadrado = num => {
    return num * num;    // Return EXPLÍCITO (con llaves)
};
console.log(cuadrado(6));  // 36

// 3️⃣ UN PARÁMETRO + UNA EXPRESIÓN - Sintaxis ULTRA CORTA
// Regla: Sin paréntesis + sin llaves + sin return = Return IMPLÍCITO
// Ideal para funciones muy simples de una sola línea
const decimaPotencia = num => num ** 10;
console.log(decimaPotencia(2));  // 1024

// ============================================
// REGLAS CLAVE DE SINTAXIS ARROW FUNCTIONS
// ============================================

// 📌 0 PARÁMETROS: Paréntesis OBLIGATORIOS
const saludar = () => "¡Hola mundo!";
console.log(saludar());  // ¡Hola mundo!

// 📌 1 PARÁMETRO: Paréntesis OPCIONALES (ambas formas son válidas, pero es recomendable siempre poner los parencetesis para la legibilidad)
const duplicar = n => n * 2;           // Sin paréntesis ✓ (más conciso)
const duplicar2 = (n) => n * 2;        // Con paréntesis ✓ (más legible)
console.log(duplicar(5));   // 10
console.log(duplicar2(5));  // 10

// 📌 2+ PARÁMETROS: Paréntesis OBLIGATORIOS
const sumar = (a, b) => a + b;
console.log(sumar(3, 7));  // 10

// 📌 UNA SOLA EXPRESIÓN: Return IMPLÍCITO (sin llaves ni return)
const triplicar = x => x * 3;
console.log(triplicar(4));  // 12

// 📌 MÚLTIPLES LÍNEAS: Return EXPLÍCITO (con llaves)
const procesar = (x, y) => {
    const suma = x + y;
    const doble = suma * 2;
    return doble;  // Return OBLIGATORIO
};
console.log(procesar(2, 3));  // 10

// 📌 RETORNAR OBJETOS LITERALES: Paréntesis ALREDEDOR del objeto
// ⚠️ IMPORTANTE: Sin paréntesis, {} se interpreta como bloque de código
const crearUsuario = (nombre, edad) => ({ nombre, edad });  // ✓ CORRECTO
console.log(crearUsuario("Ana", 25));  
// { nombre: "Ana", edad: 25 }

// ============================================
// COMPARACIÓN: ARROW FUNCTION vs FUNCIÓN NORMAL
// ============================================

// Función normal
function multiplica(a, b) {
    return a * b;
}

// Arrow function equivalente
const multiplica2 = (a, b) => a + b;

// Arrow function es más concisa y moderna
// Si en dado caso se piensa utilizar la funcion repetidas veces es más recomendado usar la funcion normal
// ============================================
// ⚠️ ERRORES COMUNES A EVITAR
// ============================================

// ❌ ERROR: Olvidar paréntesis de los argumentos con 0 parámetros
// const error1 = => "hola";  // SyntaxError: Unexpected token '=>'

// ❌ ERROR: Olvidar paréntesis con múltiples parámetros  
// const error2 = a, b => a + b;  // SyntaxError: Missing parentheses

// ❌ ERROR: Sin paréntesis en objeto (se interpreta como bloque)
// const error3 = nombre => { nombre, edad: 25 };  // undefined
// const correcto = nombre => ({ nombre, edad: 25 });  // ✓ CORRECTO

// ❌ ERROR: Return explícito sin llaves
// const error4 = x => return x * 2;  // SyntaxError: Unexpected token 'return'
// const correcto2 = x => x * 2;  // ✓ CORRECTO (return implícito)