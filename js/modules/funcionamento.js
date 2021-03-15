export default class Funcionamento
{
  constructor(funcionamento, activeClass)
  {
    this.funcionamento = document.querySelector(funcionamento);
    this.activeClass = activeClass;
  }

  dadosFuncionamento()
  {
    this.diasSemana = this.funcionamento.dataset.semana.split(',').map(Number);
    this.horarioSeamana = this.funcionamento.dataset.horario.split(',').map(Number);
  }

  dadosAgora()
  {
    this.dataAgora = new Date();
    this.diaAgora =  this.dataAgora.getDay();
    this.horarioAgora =  this.dataAgora.getUTCHours() - 3;
  }

  estaAberto()
  {
    const semanaAberto = this.diasSemana.indexOf(this.diaAgora) !== -1;
    const horarioAberto = (this.horarioAgora >= this.horarioSeamana[0] && this.horarioAgora < this.horarioSeamana[1]);

    return semanaAberto && horarioAberto;
  }

  ativaAberto()
  {
    if(this.estaAberto())
    {
      this.funcionamento.classList.add(this.activeClass);
    }
  }

  init()
  {
    if(this.funcionamento)
    {
      this.dadosFuncionamento();
      this.dadosAgora();
      this.ativaAberto();
    }

    return this;
  }
}
