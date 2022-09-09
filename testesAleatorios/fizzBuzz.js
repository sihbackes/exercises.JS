//Divisivel por 3 => Fizz
//Divisivel por 5 => Buzz
//Divisivel po 3 e 5 => FizzBuzz
//Nao divisivel por 3 ou 5 => retorna o mesmo numero
//Se nao for numero => retorna mensagem 'Nao e um numero'

function fizzBuzz(numero){
  if (typeof numero !== 'number') {
    console.log('Nao e um numero!!')
  }
  if (numero % 3 != 0 || numero % 5 != 0) {
    console.log(numero)
  }
  if (numero % 3 === 0 && numero % 5 === 0) {
    console.log('FizzBuzz')
  }
  if (numero % 5 === 0) {
    console.log('Buzz')
  }
  if (numero % 3 === 0) {
    console.log('Fizz')
  }

}

fizzBuzz(11)