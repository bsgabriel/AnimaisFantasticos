import AnimaNumeros from './animaNumeros.js';

export default function fetchAnimais(url, target, textoObservacao)
{

  // Cria a div contendo informações com o total de animais
  function createAnimal(animal)
  {
    const div = document.createElement('div');
    div.classList.add('numeroAnimal');
  
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }
  
  // Preenche cada animal no DOM
  const numerosGrid = document.querySelector(target);
  function preencherAnimais(animal)
  {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  // Anima os numeros de cada animal
  function animaAnimaisNumeros()
  {
    const animaNumeros = new AnimaNumeros('[data-numero]','.numeros', 'ativo');
    animaNumeros.init();
  }

  // Puxa os animais através de um arquivo JSON, e cria cada animal usando create animal
  async function criarAnimais()
  {
    try
    {
      // Fetch, espera resposta e transforma em JSON
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();

      // Após transformar em JSON, ativa as funções para preencher e animar os números
      animaisJSON.forEach(animal => preencherAnimais(animal));
      animaAnimaisNumeros();

      // Adiciona uma observação no final da div (opcional)    
      if(textoObservacao)
      {
        const observacao = document.createElement('h4');
        observacao.innerText = textoObservacao;
        numerosGrid.appendChild(observacao); 
      }

    } 
    catch(erro) 
    {
      console.log(erro);   
    }
  }
    
  return criarAnimais();

}
