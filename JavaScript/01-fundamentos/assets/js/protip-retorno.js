// function crearPersona(nombre, apellido) {
//     return {
//         nombre,
//         apellido,
//     };
// }

//modo funcion flecha simplificado
const crearPersona = (nombre, apellido) => ({nombre, apellido});

const persona = crearPersona('Alejo', 'Leal');
console.log(persona);