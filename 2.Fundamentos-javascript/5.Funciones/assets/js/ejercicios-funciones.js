function numeroAleatorio() {
    return Math.random();
}
console.log("Funcion normal", numeroAleatorio())

//tranformar esta funcion normal a una arrow function sin llaves

const numeroAleatorio2 = () => Math.random();
console.log("Arrow function sin llaves", numeroAleatorio2())