let juegosFavoritos = [
    'Kingdom Hearts χ / Union χ / Back Cover',
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
