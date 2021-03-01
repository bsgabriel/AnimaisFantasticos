export default function initModal()
{
  const btnAbrir = document.querySelector('[data-modal="abrir"]');
  const btnFechar = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');
  
  function toggleModal(event)
  {
    event.preventDefault();
    containerModal.classList.toggle('ativo');
  }

  // Fecha a caixa de login ao clicar fora dela
  function cliqueForaModal(event)
  {
    if(event.target === this)
    {
      toggleModal(event);
    }
  }

  // Fecha a caixa de login ao pressionar ESC
  function cliqueESC(event)
  {
    if(event.key === 'Escape' && containerModal.classList.contains('ativo'))
    {
      toggleModal(event);        
    }
  }

  if(btnAbrir && btnFechar && containerModal)
  {  
    btnAbrir.addEventListener('click', toggleModal);
    btnFechar.addEventListener('click', toggleModal);
    containerModal.addEventListener('click', cliqueForaModal);
    window.addEventListener('keydown', cliqueESC);
  }
}
