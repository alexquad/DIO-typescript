"use strict";
let btn = document.getElementById('btn');
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
function adicionarNumeros(num1, num2) {
    return num1 + num2;
}
if (btn) {
    btn.addEventListener('click', () => {
        if (input1 && input2) {
            console.log(adicionarNumeros(Number(input1.value), Number(input2.value)));
        }
    });
}
