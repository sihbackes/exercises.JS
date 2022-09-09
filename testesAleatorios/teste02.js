
//Funcao que usa 2 numeros e retorna o menor entre eles
//Minha versao:

function maiorValor(a,b){
if(a == b){
  console.log(`${a} é o mesmo que ${b}`)
} else if(a > b) {
  console.log(`${a} é maior que ${b}`)
} else {
  console.log(`${b} é maior que ${a}`)
}
}

maiorValor(9,7);