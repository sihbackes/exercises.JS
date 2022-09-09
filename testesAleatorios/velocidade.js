//Velocidade maxima de ate 70 km/h
//a cada 5 km acima do limite vc ganha um ponto na carteira
//Caso os pontos sejam maiores que 12 => 'Carteira Suspensa'

function calculaVelocidade(velocidade){
  const velocidadeMaxima = 70;
  const kmPorPonto = 5;
  if(velocidade <= velocidadeMaxima){
    console.log('Dirija com seguranca!')
  } else {
    const pontos = (Math.floor((velocidade - velocidadeMaxima)/ kmPorPonto))
     if(pontos >= 12){
     console.log('Carteira suspensa!')
    } else {
      console.log(`${pontos} pontos na carteira!`)
    }
  }
}

calculaVelocidade(82)