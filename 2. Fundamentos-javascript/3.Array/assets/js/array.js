//los arreglos son una coleccion de datos que pueden ser de cualquier tipo
/*
let array = [1, 'hola', true, null, undefined, {nombre: 'juan'}, [1,2,3]];
console.log(array);
*/
//cabe recalcar que los arreglos en javascript son dinamicos, es decir, pueden crecer y decrecer segun se necesite
// ademas que para acceder a un elemento del arreglo se utiliza el indice, el cual comienza en 0 y sigue hasta n-1

//una forma de crear una arreglo  es la siguiente
/*
let array2 = new Array(10); //crea un arreglo con 10 espacios vacios
console.log(array2);
*/

let videoJuegos = ['Kingdom Hearts', 'Gears of war', 'Halo'];
console.log(videoJuegos);
console.log(videoJuegos[0]); //acceder al primer elemento   

//una buena practica es usar saltos de linea y comas al final para evitar errores
let cosas = [// despues de cada elemento se pone una coma para separar cada elemento
    true,
    123,
    'Juan',
    1 + 2,
    function(){},
    ()=>{},
    {nombre: 'juan'},
    {a: 1},
    ['XBOX', 'PS5', 'Switch', 'PC', [
        'Steam', 'Epic', 'Ubisoft', 'Origin'
    ]],
];
console.log(cosas);
console.log(cosas[8][4][2]);