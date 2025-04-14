//array con 10 posiciones vacias
const arr = new Array(10);
console.log(arr);

let videoJuegos = ['Mario Bros', 'Zelda', 'Call of Duty', 'Fifa', 'Street Fighter'];
console.log({videoJuegos});
console.log(videoJuegos[0]); //imprimiendo una posicion especifica


//Los arreglos pueden ser de diferentes tipos de datos
let arregloCosas = [
    true, //booleano
    123, //numero
    'hola', //string
    function(){}, //funcion tradicional
    () => {}, //arrow function
    {a: 1}, //objeto
    ['X', 'Megaman', 'Zero', 'Dr. Light'], //array
];
console.log(arregloCosas[6][3]); //imprimiendo una posicion especifica de un array dentro de otro array