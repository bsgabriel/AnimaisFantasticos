import outsideClick from "./outsideClick.js";

export default function initMenuMobile()
{
  const btnMenu = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const eventos = ['click', 'touchstart'];

  function openMenu()
  {
    menuList.classList.add('active');
    btnMenu.classList.add('active');
    outsideClick(menuList, eventos, () => {
      menuList.classList.remove('active');
      btnMenu.classList.remove('active'); 
    });
  }

  if(btnMenu)
  {
    eventos.forEach((evento) => {
      btnMenu.addEventListener(evento, openMenu);
    });
  }
}