export default function initFuncionamento()
{
  const funcionamento = document.querySelector('[data-semana');
  const diasSemana = funcionamento.dataset.semana.split(',').map(Number);
  const horarioSeamana = funcionamento.dataset.horario.split(',').map(Number);
  
  const dataAgora = new Date();
  const diaAgora =  dataAgora.getDay();
  const horarioAgora =  dataAgora.getHours();
  
  const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;
  const horarioAberto = (horarioAgora >= horarioSeamana[0] && horarioAgora < horarioSeamana[1]);
  
  if(semanaAberto && horarioAberto)
  {
    funcionamento.classList.add('aberto');
  }
}
