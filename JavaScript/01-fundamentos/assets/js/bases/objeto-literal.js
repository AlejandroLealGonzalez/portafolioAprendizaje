let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        calle: 'Main St',
        pais: 'USA',
        ciudad: 'New York'
    },
    'ultima-pelicula': 'Infinity War',
};

console.log(personaje);
console.log('Nombre:', personaje.nombre);
console.log('Ciudad: ', personaje.direccion.ciudad);
console.log('Traje:', personaje.trajes[2]);
console.log('No. de traje:', personaje.trajes.length);


//borrar una propiedad
delete personaje.edad;
console.log(personaje);


//manejarlo como un array de arrays
const entriesPares = Object.entries(personaje);
console.log(entriesPares);

//agregar una propiedad
personaje.dinero = 1000000000;

console.log(personaje);

//bloquear propiedades
Object.freeze(personaje);
personaje.dinero = 2000000000;
console.log(personaje);

//obtener las keys
const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);
console.log(propiedades, valores);