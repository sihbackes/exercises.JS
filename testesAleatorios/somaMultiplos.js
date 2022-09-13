//Criar funcao que retorna a somo de todos os multiplos de 3 e 5
//Dentro de 10
//Multiplos de 3 sao 3, 6 e 9
//Multiplos de 5 sao 5 e 10

function somar(limite) {
  let multiplosDe3 = 0;
  let multiplosDe5 = 0;
  for(i = 0; i <= limite; i++){
    if(i % 3 === 0){
      multiplosDe3 += i;
    } if(i % 5 === 0) {
      multiplosDe5 += i;
    }
  }
  console.log(multiplosDe3 + multiplosDe5)
}

somar(10)