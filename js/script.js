import initModal from './modules/modal.js';
import initTabNav from './modules/tabNav.js';
import initTooltip from './modules/tooltip.js';
import Accordion from './modules/accordion.js';
import initMenuMobile from './modules/menuMobile.js';
import ScrollSuave from './modules/scrollSuave.js';
import initFetchAnimais from './modules/fetchAnimais.js';
import initDropdownMenu from './modules/dropdownMenu.js'; 
import initFetchBitcoin from './modules/fetchBitcoin.js';
import initFuncionamento from './modules/funcionamento.js';
import initAnimacaoScroll from './modules/animacaoScroll.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

initModal();
initTabNav();
initTooltip();
initMenuMobile();
initFetchAnimais();
initDropdownMenu();
initFetchBitcoin();
initFuncionamento()
initAnimacaoScroll();
