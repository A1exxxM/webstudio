function promo() {
    const title = document.querySelector('.promo__title'),
          subtitle = document.querySelector('.promo__subtitle');
    title.style.display = 'none';
    subtitle.style.display = 'none';
    setTimeout(function(){
        title.style.display = '';
        title.classList.add('animate__animated', 'animate__fadeInDown');
        subtitle.style.display = '';
        subtitle.classList.add('animate__animated', 'animate__fadeInDown');
    },1700);
    const wrapper = document.querySelector('.promo__wrapper'),
          icon = document.querySelector('.promo__icon');
    wrapper.style.display = 'none';
    icon.style.display = 'none';
    setTimeout(function(){
        wrapper.style.display = '';
        wrapper.classList.add('animate__animated', 'animate__fadeInDown');
        icon.style.display = '';
        icon.classList.add('animate__animated', 'animate__fadeInDown');
    },2500);
    function scrollToBlock(selector,point) {
        selector.addEventListener('click', (e)=>{
            e.preventDefault();
            point.scrollIntoView({behavior: "smooth"});
        });
    }
    const servicesBtn = document.querySelector('.promo__services'),
          hireBtn = document.querySelector('.promo__hire'),
          servicesPoint = document.querySelector('.services'),
          hirePoint = document.querySelector('.price'),
          iconPoint = document.querySelector('.about');
    scrollToBlock(servicesBtn,servicesPoint);
    scrollToBlock(hireBtn,hirePoint);
    scrollToBlock(icon,iconPoint);
}
export default promo;