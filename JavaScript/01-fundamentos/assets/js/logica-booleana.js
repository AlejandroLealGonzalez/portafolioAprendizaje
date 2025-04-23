const regresaTrue = () => {
    console.log("Regresando true");
    return true;
}

const regresaFalse = () => {
    console.log("Regresando false");
    return false;
}

console.warn('Not o la negacion');
console.log(true);
console.log(!true);
console.log(!false);
console.log(!regresaFalse());

console.warn('And');
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log(regresaFalse() && regresaTrue());

console.warn('Or');
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.warn('Asignacinaciones');
const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = true && 'Hola Mundo' && 150;
const a2 = 'Hola' && 'Mundo' && soyFalso && true;
const a3 = soyFalso || 'Ya no soy falso'
const a4 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso de nuevo';
const a5 = soyFalso || soyUndefined || regresaTrue() || 'Ya no soy falso de nuevo';
console.log({a1, a2, a3, a4, a5});