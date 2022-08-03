function blog() {
    const blogItems = document.querySelectorAll('.blog__item');
    blogItems.forEach(item => {
        item.style.transition = '1.3s all';
        item.style.opacity = '0';
    });
    window.addEventListener('scroll', ()=>{
        if (window.scrollY >= 6700) {
            blogItems.forEach(item => {
                item.style.opacity = '1';
            });
        }
    });
    const blogBtn = document.querySelector('.blog__btn');
    blogBtn.addEventListener('click', ()=>{
        blogItems.forEach(item => {
            if (item.classList.contains('blog__item-hide')) {
                item.classList.remove('blog__item-hide');
                item.classList.add('blog__item-show');
                blogBtn.textContent = 'Hide Part';
                window.scrollTo(blogBtn);
            } else if (item.classList.contains('blog__item-show')) {
                item.classList.remove('blog__item-show');
                item.classList.add('blog__item-hide');
                blogBtn.textContent = 'More View';
                window.scrollTo(blogBtn);
            }
        });
    });
}

export default blog;