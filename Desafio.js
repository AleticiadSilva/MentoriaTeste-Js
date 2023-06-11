const listaPessoas = [
    { nome: 'Adriana', idade: 17, email: 'adriana@gmail.com' },
    { nome: 'Joana', idade: 12, email: 'joana@outlook.com' },
    { nome: 'Rebeca', idade: 87, email: 'rebeca@outlook.com' },
    { nome: 'Anne', idade: 5, email: 'anne@hotmail.com' }
  ]
  
  function classificarIdade(pessoas) {
    for (let i = 0; i < pessoas.length; i++) {
      const pessoa = pessoas[i]
      const { nome, idade, email } = pessoa
      if (idade < 12) {
        classificacao = 'Criança'
      } else if (idade >= 12 && idade <= 17) {
        classificacao = 'Adolescente'
      } else {
        classificacao = 'Adulto'
      }
      
      console.log(`Nome: ${nome}, Idade: ${idade}, E-mail: ${email}. Classificação: ${classificacao}`)
    }
  
    return pessoas.length
    
  }
  
  function ordenarIdade(a, b){
    return (a.idade - b.idade) 
  }
  listaPessoas.sort(ordenarIdade); 
  
  const quantidadePessoas = classificarIdade(listaPessoas)
  console.log(`A quantidade de pessoas de pessoas da Lista é: ${quantidadePessoas}`)
  