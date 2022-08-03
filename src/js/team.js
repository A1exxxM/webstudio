function teamSlider() {
    const slides = document.querySelectorAll('.team__slide'),
          slidesWrapper = document.querySelector('.team__wrapper'),
          slidesInner = document.querySelector('.team__inner'),
          width = window.getComputedStyle(slidesWrapper).width,
          dots = document.querySelectorAll('.team__dots-item');
    let offset = 0,
        slideCount = slides.length;
    slidesInner.style.width = 100 * slideCount + '%';
    slidesWrapper.style.overflow = 'hidden';
    slides.forEach(slide => {
        slide.style.width = width;
    });
    function dotsActiveClass(i = 0) {
        dots.forEach(dot => {
            dot.classList.remove('team__dots-item_active');
        });
        dots[i].classList.add('team__dots-item_active');
    }
    dotsActiveClass();
    dots.forEach((dot,i) =>{
        dot.addEventListener('click', (e)=>{
            const slideTo = e.target.getAttribute('data-slide');
            offset = (+width.replace(/\D/g, '') * (slideTo - 1));
            slidesInner.style.transform = `translateX(-${offset}px)`;
            dotsActiveClass(i);
        });
    });
}

export default teamSlider;