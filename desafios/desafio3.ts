// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?

let botaoAtualizar = document.getElementById('atualizar-saldo') as HTMLButtonElement;
let botaoLimpar = document.getElementById('limpar-saldo') as HTMLButtonElement;
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo') as HTMLElement;

campoSaldo.innerHTML = '0'

let totalValue: number = 0;

function somarAoSaldo(soma: number) {
  if (campoSaldo){
    totalValue += soma;
    campoSaldo.innerHTML = totalValue.toString();
  }
}

function limparSaldo() {
  campoSaldo.innerHTML = '';
  totalValue = 0;
}

if (botaoAtualizar){
  botaoAtualizar.addEventListener('click', function () {
    console.log("Pressed");
    somarAoSaldo(Number(soma.value));
  });
}

if (botaoLimpar){
  botaoLimpar.addEventListener('click', function () {
      limparSaldo();
  });
}