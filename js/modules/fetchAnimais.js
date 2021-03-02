import AnimaNumeros from './animaNumeros.js';

export default function initFetchAnimais()
{

  function createAnimal(animal)
  {
    const div = document.createElement('div');
    div.classList.add('numeroAnimal');
  
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  async function fetchAnimais(url)
  {
    try
    {
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();
      const numerosGrid = document.querySelector('.numerosGrid');
      const observacao = document.createElement('h4');
    
      animaisJSON.forEach((animal) => {
        const divAnimal = createAnimal(animal);
        numerosGrid.appendChild(divAnimal);
      });
    
      observacao.innerText = 'Os números não são dados reais.';
      numerosGrid.appendChild(observacao); 
      
      const animaNumeros = new AnimaNumeros('[data-numero]','.numeros', 'ativo');
      animaNumeros.init();
    } 
    catch(erro) 
    {
      console.log(erro);   
    }
  }
    
  fetchAnimais('./animaisapi.json');
}
