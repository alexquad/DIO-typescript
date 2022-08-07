"use strict";
function somarValoresNumericos(num1, num2) {
    return num1 + num2;
}
console.log(somarValoresNumericos(1, 3));
function printaValoresNumericos(num1, num2) {
    console.log(num1 + num2);
}
function somarValoresNumericosCallBack(num1, num2, callback) {
    let resultado = num1 + num2;
    return callback(resultado);
}
function aoQuadrado(numero) {
    return numero * numero;
}
console.log("Ao quadrado: ", somarValoresNumericosCallBack(1, 2, aoQuadrado));
