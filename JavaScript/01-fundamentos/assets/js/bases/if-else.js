let a = 5;

if(a >= 10) {
    console.log("a es mayor o igualque 10");
} else {
    console.log("a es menor que 10");
}

// console.log("Fin del programa");

const hoy = new Date();
console.log(hoy);
let dia = hoy.getDay(); // 0 = domingo, 1 = lunes, 2 = martes, 3 = miercoles, 4 = jueves, 5 = viernes, 6 = sabado
console.log({dia}); 

if (dia === 0) {
    console.log("Es domingo");
} else if (dia === 1) {
    console.log("Es lunes");
} else if (dia === 2) {
    console.log("Es martes");
} else if (dia === 3) {
    console.log("Es miercoles");
} else if (dia === 4) {
    console.log("Es jueves");
} else if (dia === 5) {
    console.log("Es viernes");
} else if (dia === 6) {
    console.log("Es sabado");
}

// sin usar If Else o Switch unicamente objetos
const semana = {
    0: "Domingo",
    1: "Lunes",
    2: "Martes",
    3: "Miercoles",
    4: "Jueves",
    5: "Viernes",
    6: "Sabado",
}

console.log(semana[dia] || "Dia no valido"); // si no existe el dia, devuelve "Dia no valido"