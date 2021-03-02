export default class initModal
{
  constructor(btnAbrir, btnFechar, containerModal)
  {
    this.btnAbrir = document.querySelector(btnAbrir);
    this.btnFechar = document.querySelector(btnFechar);
    this.containerModal = document.querySelector(containerModal);

    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.cliqueForaModal = this.cliqueForaModal.bind(this);
    this.cliqueESC = this.cliqueESC.bind(this);
  }

  toggleModal()
  {
    this.containerModal.classList.toggle('ativo');
  }

  eventToggleModal(event)
  {
    event.preventDefault();
    this.toggleModal();

  }

  // Fecha a caixa de login ao clicar fora dela
  cliqueForaModal(event)
  {
    if(event.target === this.containerModal)
    {
      this.toggleModal();
    }
  }

  // Fecha a caixa de login ao pressionar ESC
  cliqueESC(event)
  {
    if(event.key === 'Escape' && this.containerModal.classList.contains('ativo'))
    {
      this.toggleModal();        
    }
  }

  addModalEvents()
  {
    this.btnAbrir.addEventListener('click', this.eventToggleModal);
    this.btnFechar.addEventListener('click', this.eventToggleModal);
    this.containerModal.addEventListener('click', this.cliqueForaModal);
    window.addEventListener('keydown', this.cliqueESC);
  }

  init()
  {
    if (this.btnAbrir && this.btnFechar && this.containerModal)
    {
      this.addModalEvents();
    }
    return this;
  }

}
