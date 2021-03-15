import ScrollSuave from './modules/scrollSuave.js';
import Accordion from './modules/accordion.js';
import TabNav from './modules/tabNav.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import MenuMobile from './modules/menuMobile.js';
import fetchAnimais from './modules/fetchAnimais.js';
import fetchBitcoin from './modules/fetchBitcoin.js';
import DropdownMenu from './modules/dropdownMenu.js'; 
import initFuncionamento from './modules/funcionamento.js';
import AnimacaoScroll from './modules/animacaoScroll.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabNav.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();

const tooltip = new Tooltip('[data-tooltip]');
tooltip.init();

const scrollAnimacao = new AnimacaoScroll('[data-anime="scroll"]');
scrollAnimacao.init();

const dropdownMenu = new DropdownMenu('[data-dropdown');
dropdownMenu.init();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();


initFuncionamento()


fetchAnimais('../../animaisapi.json', '.numerosGrid', 'Os números não são dados reais.');
fetchBitcoin('https://blockchain.info/ticker', '.btcPreco');