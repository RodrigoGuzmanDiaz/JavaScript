//Javascript tiene 2 tipos de datos principales: primitivos y objetos.
//Los datos primitivos incluyen: string, number, boolean, null, undefined, symbol y bigint.
//Los objetos son colecciones de datos y funcionalidades más complejas.
// los objetos literales son como los diccionarios en python, son una colección de pares clave-valor.
const personaje = {
    nombre: 'Sora',
    edad: 16,
    arma: 'Llave espada',
    vivo: true,
    habilidades: ['magia', 'invocaciones', 'combos aereos', 'ataques especiales'],
    direccion: {
        ciudad: 'Islas del destino',
        reino: 'Reino Corazón'
    },
    tranformaciones: ['Valor', 'Sabiduría', 'Maestría', 'Limitador', 'Final'],
    'ultimo-juego': 'Kingdom Hearts III' // no es recomendable usar espacios o guiones medios porque si usamos guiones medios se interpreta como si fuera una resta si es muy necesario usar guiones medios o espacios se recomienda usar comillas simples o dobles para definir la propiedad, si no es necesario podemos en lugar de usar guiones medios o espacios usar camelCase o guion_bajo.
}
console.log("Nombre:", personaje.nombre) //usamos la notación de punto para acceder a las propiedades del objeto
console.log("Arma:", personaje["arma"]) //también podemos usar la notación de corchetes
console.log("Habilidad más importante:", personaje.habilidades[0]) //accedemos a un elemento del array dentro del objeto
console.log("Direccion:", (`${personaje.direccion.ciudad}, ${personaje.direccion.reino}`)) //accedemos a una propiedad del objeto dentro del objeto


console.log({personaje}) //objeto completo, se muestra toda su estructura pero recordemos que en javascript se tiene que el standar que se van a trabajar de forma alfabetica las propiedades de los objetos. es por eso que en el navegador se muestra de esa forma, aunque lo tengamos en otro orden en el código.

console.log("Ultima Transformacion:", personaje.tranformaciones[personaje.tranformaciones.length-1])

const x = 'vivo';
console.log("Esta vivo?", personaje[x]) // podemos usar variables para acceder a las propiedades del objeto con la notación de corchetes
console.log("Ultimo juego:", personaje['ultimo-juego']) //accedemos a la propiedad con guion medio usando notación de corchetes

///------------------------MAS DETALLES--------------------

//para eliminar una propiedad de un objeto usamos la palabra reservada delete
delete personaje.edad;
console.log({personaje});


const entriesPares = Object.entries( personaje ); //convierte el objeto en un array de arrays con pares clave-valor, en pocas palabras convierte las propiedades de un objeto en un array con valores pares 
console.log( entriesPares );

// ahora vamos a ver como podemos hacer que nuestro objeto sea inmutable (que no se pueda modificar)
// nosotros pensariamos que bastaria con pasar de let a const pero no es asi, ya que const solo evita que la variable apunte a otro objeto, pero el objeto en si puede ser modificado. 
// es decir por ejemplo que personaje = {} 
//personaje = {}; //esto no se puede hacer si personaje es const, pero si podemos modificar sus propiedades.
personaje.nombre = 'Riku'; //esto si se puede hacer, aunque personaje sea const
console.log( personaje );

//para hacer que un objeto sea inmutable usamos Object.freeze
Object.freeze( personaje );
personaje.arma = 'Espada de luz';
personaje.nuevoAtributo = 'Nuevo'; //esto no se puede hacer ya que el objeto esta congelado
delete personaje.vivo;

//el objet.freeze solo hace que el objeto no pueda ser modificado a nivel superficial, pero si tiene objetos anidados dentro, estos si pueden ser modificados.
personaje.direccion.ciudad = 'Twilight Town'; //esto si se puede hacer
console.log( personaje );

const propiedades = Object.getOwnPropertyNames( personaje ); //obtiene un array con los nombres de las propiedades del objeto
const valores = Object.values( personaje ); //obtiene un array con los valores de las propiedades del objeto
console.log({propiedades ,valores});

//para ver documenación oficial de objetos en javascript
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
