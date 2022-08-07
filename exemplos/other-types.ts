let anyEstaDeVolta: any;
anyEstaDeVolta = 3;
anyEstaDeVolta = 'teste';
anyEstaDeVolta = 5;

let stringTest: string = 'verificar';
stringTest = anyEstaDeVolta;


let unknownValor: unknown;
unknownValor = 3;
unknownValor = 'olá';
unknownValor = true;
unknownValor = 'vai sim';

let stringTest2: string = 'agora vai';
// stringTest2 = unknownValor; // ERRO

if (typeof unknownValor === 'string'){
  stringTest2 = unknownValor;
}

// eita
function jogaErro(erro: string, codigo: number): never{
  throw {error: erro, code: codigo}
}

jogaErro('deu erro', 500);