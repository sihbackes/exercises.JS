//Receber uma quantidade de valores para avaliar
//funcao exibe se cada valor e par ou impar 
//minha versao
function parOuImpar(numero){
  if(numero % 2 === 0) {
    console.log(`O numero ${numero} e par.`) 
  } else {
    console.log(`O numero ${numero} e impar.`) 
  }
}

parOuImpar(15)

//versao aula
function exibirTipo(limite) {
  for(let i = 0; i <= limite; i++) {
    if (i % 2 === 0) {
      console.log(i, `PAR`)
    } else {
      console.log(i, `IMPAR`)
    }
  }
}

exibirTipo(5)