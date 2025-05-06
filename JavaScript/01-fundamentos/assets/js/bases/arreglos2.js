//arreglos con metodos

let juegos = ['FIFA', 'Call of Duty', 'Mario Bros', 'Street Fighter', 'Mortal Kombat'];
console.log('largo: ', juegos.length);

let primero = juegos[0];
let ultimo = juegos[juegos.length - 1];
console.log('primero: ', primero);
console.log('ultimo: ', ultimo);

//recorrer arreglos con forEach
juegos.forEach((juego, index, arr) => {
    console.log(juego, index, arr);
});

//añadir elementos al final del arreglo y arroja una nueva longitud
let nuevaLongitud = juegos.push('Street Fighter 2');
console.log({nuevaLongitud, juegos});

//añadir al principio del arreglo y arroja una nueva longitud
nuevaLongitud = juegos.unshift('Street Fighter 1');
console.log({nuevaLongitud, juegos});

let juegoBorrado = juegos.pop(); //elimina el último elemento del arreglo y lo devuelve
console.log({juegoBorrado, juegos});

let pos = 1;
let juegoBorrado2 = juegos.splice(pos, 2); //elimina el elemento en la posicion indicada y lo devuelve
console.log({juegoBorrado2, juegos});

let juegoIndex = juegos.indexOf('Mario Bros'); //busca el elemento y devuelve su posición
console.log({juegoIndex});

