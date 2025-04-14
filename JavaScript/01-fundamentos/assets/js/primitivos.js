// Strings
// Se pueden usar comillas simples o dobles

let nombre = 'Peter Parker';
console.log(nombre);

nombre = 'Ben Parker';
console.log(nombre);
console.log(typeof nombre); // ver el tipo de dato

//booleanos
// true o false
// Se pueden usar para validar condiciones

let esMarvel = true;
console.log(typeof esMarvel);

// Number
// Numeros enteros o decimales
let edad = 20;
console.log(edad);
console.log(typeof edad);

//undefined y null
// undefined = variable declarada pero sin valor
// null = variable declarada y sin valor

let superPoder;
console.log(superPoder);
console.log(typeof superPoder);

superPoder = null;
console.log(superPoder);
console.log(typeof superPoder);

// Symbol
// Se usa para crear identificadores únicos
// Se usa para evitar conflictos entre propiedades de objetos
// Se usa para crear propiedades privadas en objetos

let id = Symbol('id');
console.log(id);
console.log(typeof id);

console.log(id.description); // para ver la descripción del símbolo
console.log(id.toString()); // para ver el valor del símbolo
