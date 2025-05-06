//funcion normal, comunmente no recomendable usar
function saludar(nombre ) {
    console.log('Hola '+ nombre + ' desde la función saludar');
    return 1;
};

//funcion anonima
const saludar2 = function() {
    console.log("Hola desde la función saludar2");
};
//con parametro
const saludar21 = function(nombre) {
    console.log('Hola '+ nombre + ' desde la función saludar2');
};

//funciones flecha
const saludarFlecha = () => {
    console.log('Hola flecha');
};
const saludarFlecha2 = (nombre) => {
    console.log('Hola ' + nombre + ' flecha');
};




// const retornoSaludar = saludar('Alejo');
// console.log(retornoSaludar);
// saludar2();
// saludar21('Alejo');
// saludarFlecha();
// saludarFlecha2('Alejo');

function sumar(a, b) {
    return a + b;
}

const sumar2 = (a, b) => {
    return a + b;
};

//funcion flecha de una sola linea, sin llaves y sin return
// se puede omitir el return y las llaves
const sumar3 = (a, b) => a + b;

// console.log(sumar2(3, 5));
// console.log(sumar3(5, 6));
// console.log(sumar(1, 2));

function getAleatorio() {
    return Math.random();
};

const getAleatorio2 = () => Math.random();

console.log(getAleatorio());
console.log(getAleatorio2());