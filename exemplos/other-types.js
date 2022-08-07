"use strict";
let anyEstaDeVolta;
anyEstaDeVolta = 3;
anyEstaDeVolta = 'teste';
anyEstaDeVolta = 5;
let stringTest = 'verificar';
stringTest = anyEstaDeVolta;
let unknownValor;
unknownValor = 3;
unknownValor = 'olá';
unknownValor = true;
unknownValor = 'vai sim';
let stringTest2 = 'agora vai';
// stringTest2 = unknownValor; // ERRO
if (typeof unknownValor === 'string') {
    stringTest2 = unknownValor;
}
// eita
function jogaErro(erro, codigo) {
    throw { error: erro, code: codigo };
}
jogaErro('deu erro', 500);
