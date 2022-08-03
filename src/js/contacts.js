function contacts() {
    const wrapper = document.querySelector('.contacts__wrapper');
    wrapper.style.opacity = '0';
    wrapper.style.transition = '0.8s all';
    window.addEventListener('scroll', ()=>{
        if (window.scrollY >= 8400) {
            wrapper.style.opacity = '1';
        }
    });
}

export default contacts;