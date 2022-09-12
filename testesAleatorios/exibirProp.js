// Criar um metodo para ler propriedades de um objeto e
//exibir somente as propriedades do tipo string que estao nesse objeto

const filme = {
  titulo : 'Vingadores',
  ano: 2018,
  diretor: 'Tarantino',
  personagem: 'Thor'
}

function exibirPropriedade(objeto){
  for(propriedade in objeto)
     if(typeof objeto[propriedade] === 'string')
     console.log(propriedade, objeto[propriedade])
}

exibirPropriedade(filme)