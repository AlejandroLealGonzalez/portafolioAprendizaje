
const carros = ['Ford', 'Mazda', 'Honda', 'Toyota'];

console.warn('While');
let i = 0;
while ( i < carros.length ) {
    console.log(carros[i]);
    i++;
};


console.warn('Do While');
i = 0;
do {
    console.log(carros[i]);
    i++;
} while ( i < carros.length );