function about() {
    const wrapperAbout = document.querySelector('.about__wrapper');
    window.addEventListener('scroll', ()=> {
        if (window.scrollY >= 700) {
            wrapperAbout.classList.add('about__wrapper-active');
        }
    });
}

export default about;