// antes que nada vamos a decir el porque no debemos poner palabras capitalizadas en los nombres de lo archivos porque por ejemplo que este archivo se llama palabras-reservadas.js y no Palabras-Reservadas.js
// si en el html ponemos <script src="./assets/js/Palabras-Reservadas.js"></script> y el archivo se llama palabras-reservadas.js en el navegador seguirá funcionando porque los sistemas de archivos de Windows y Mac no son case sensitive, es decir, no distinguen entre mayusculas y minusculas en los nombres de archivos es por eso que sigue funcionando en el navegador
// pero si desplegamos nuestra aplicacion en servidores como linux, que si son case sensitive, es decir, distinguen entre mayusculas y minusculas en los nombres de archivos, entonces el navegador no podra encontrar el archivo y no funcionara nuestra aplicacion
// otros servidores que si son case sensitive se encuentra en la nube como AWS, Google Cloud, Azure, etc
// por eso es una buena practica siempre nombrar los archivos en minusculas y usar guiones medios o bajos para separar las palabras en lugar de usar mayusculas
// de esta manera evitamos problemas de compatibilidad entre diferentes sistemas de archivos y servidores
// tampoco poner caracteres expeciales espacios, ñ, tildes, etc en los nombres de los archivos porque tambien pueden causar problemas de compatibilidad en diferentes sistemas de archivos y servidores
// un ejemplo de esto seria si tenemos un archivo llamado MiArchivo.js y en el html ponemos <script src="./Miarchivo.js"></script> en Windows y Mac funcionara pero en Linux no funcionara

// ahora si vamos a ver las palabras reservadas en Javascript
//let const = 5; // esto dara un error porque const es una palabra reservada en Javascript que se utiliza para declarar variables constantes, es decir, variables cuyo valor no puede ser reasignado despues de su inicializacion 

//otra palabra reservada es function 
//let function = 10;

//const

//let

//var

//if

//try

//catch

//en la palabra enum pasa algo interesante porque en Javascript no es una palabra reservada pero en otros lenguajes de programacion como TypeScript si lo es, por lo tanto es recomendable no usarla como nombre de variable para evitar confusiones si en algun momento decidimos migrar nuestro codigo a TypeScript
let enum = 15;
// el error que da es Uncaught SyntaxError: Unexpected reserved word

//una pagina bastante divertida y util para ver todas las palabras reservadas en Javascript es esta: https://reservedwords.github.io/ o esta web: https://mothereff.in/js-variables o revisar el pdf adjunto