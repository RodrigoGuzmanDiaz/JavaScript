let juegosFavoritos = [
    'Kingdom Hearts χ',
    'Kingdom Hearts Dark Road',
    'Kingdom Hearts Birth by Sleep',
    'Kingdom Hearts 0.2 Birth by Sleep - A Fragmentary Passage',
    'Kingdom Hearts',
    'Kingdom Hearts Chain of Memories',
    'Kingdom Hearts 358/2 Days',
    'Kingdom Hearts 2',
    'Kingdom Hearts coded / Re:coded',
    'Kingdom Hearts Birth by Sleep',
    'Kingdom Hearts Dream Drop Distance',
    'Kingdom Hearts 3 + Re Mind',
    'Kingdom Hearts Melody of Memory'
];
console.log(juegosFavoritos);
// para conecer el largo de un array usamos la funcion length
console.log('Mis cantidad de juegos favoritos son: ' + juegosFavoritos.length);

// para acceder a un elemento del array usamos el indice
console.log('Mi juego favorito es: ' + juegosFavoritos[7]);

// para acceder al ultimo elemento del array usamos length -1
// en el caso de python se puede usar -1 directamente pero en javascript tendriamos que hacer una operacion matematica
console.log('El ultimo juego de la saga es: ' + juegosFavoritos[juegosFavoritos.length - 1]);

// tambien podemos guardar el valor de un indice en una variable
let primero = juegosFavoritos[0];
let favorito = juegosFavoritos[7];
let ultimo = juegosFavoritos[juegosFavoritos.length - 1];
// hay mas forma de mostrar el contenido dentro de llaves, para mostrar el nombre de la variable directamente y su contenido usamos las comillas invertidas ``
console.log({primero, favorito, ultimo});

// podemos modificar un elemento usando un forEach
// el orden de los parametros es: el elemento, el indice, el array completo
// la firma del callback de un forEach es: (elemento, indice, array) => {}
juegosFavoritos.forEach((juego, indice, arr) => {
    console.log({juego, indice, arr});
});


//metodos para arrays
// push: agrega uno o mas elementos al final del array y devuelve la nueva longitud del array
// la firma del push es: push(elemento1, elemento2, ...)
let pushAgregaElementoAlFinal = juegosFavoritos.push("Kingdom Hearts IV");
console.log({pushAgregaElementoAlFinal}, juegosFavoritos);

// unshift: agrega uno o mas elementos al inicio del array y devuelve la nueva longitud del array
// la firma del unshift es: unshift(elemento1, elemento2, ...)
let unshiftAgregaElementoAlInicio = juegosFavoritos.unshift("Kingdom Hearts Mobile")
console.log({unshiftAgregaElementoAlInicio}, juegosFavoritos);

// pop: elimina el ultimo elemento del array y lo devuelve
// la firma del pop es: pop()
let popEliminaUltimoElemento = juegosFavoritos.pop();
console.log({popEliminaUltimoElemento}, juegosFavoritos);

// shift: elimina el primer elemento del array y lo devuelve
// la firma del shift es: shift()
let shiftEliminaPrimerElemento = juegosFavoritos.shift();
console.log({shiftEliminaPrimerElemento}, juegosFavoritos);

// splice: elimina o reemplaza elementos en un array
// la firma del splice es: splice(indiceInicio, cantidadElementosAEliminar, elemento1, elemento2, ...)
let spliceEliminaElementos = juegosFavoritos.splice(2, 1); // partir del indice 2 elimina 1 elemento 
console.log({spliceEliminaElementos}, juegosFavoritos);

let spliceReemplazaElementos = juegosFavoritos.splice(3, 2, "Kingdom Hearts New Game+", "Kingdom Hearts Remake"); // partir del indice 3 elimina 2 elementos y agrega 2 nuevos
console.log( {spliceReemplazaElementos}, juegosFavoritos);


// slice: devuelve una copia de una parte del array dentro de un nuevo array
// la firma del slice es: slice(indiceInicio, indiceFin)
let sliceCopiaParteDelArray = juegosFavoritos.slice(1, 4); // copia desde el indice 1 hasta el indice 4 (sin incluir el indice 4)
console.log({sliceCopiaParteDelArray}, juegosFavoritos);

// indexOf: devuelve el primer indice en el que se encuentra un elemento dado, o -1 si no se encuentra
// recordad que esto es case sensitive por lo tanto si no escribimos bien el nombre no lo encontrara
// la firma del indexOf es: indexOf(elementoBuscado)
let indexOfEncuentraIndice = juegosFavoritos.indexOf("Kingdom Hearts 2");
let indexOfNoEncuentraIndice = juegosFavoritos.indexOf("Kingdom Hearts XV");
console.log(indexOfEncuentraIndice);
console.log(indexOfNoEncuentraIndice)