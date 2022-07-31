import about from './about';
import header from './header';
import promo from './promo';
import services from './services';
import worksTab from './works';
window.addEventListener('DOMContentLoaded', ()=>{
    header();
    promo();
    about();
    services();
    worksTab();
});