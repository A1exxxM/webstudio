function services() {
    const btns = document.querySelectorAll('.services__item-btn'),
          imgPhone = document.querySelectorAll('.services__phone');
    btns.forEach(btn => {
        btn.addEventListener('mouseover', (e) => {
            e.target.parentNode.classList.add('services__item-active');
            e.target.classList.add('services__item-btn_active');
            imgPhone.forEach(img => {
                if(e.target.parentNode.contains(img)) {
                    img.src = 'icons/smartphone.png';
                }
            });
        });
        btn.addEventListener('mouseout', (e) => {
            e.target.parentNode.classList.remove('services__item-active');
            e.target.classList.remove('services__item-btn_active');
            imgPhone.forEach(img => {
                if(e.target.parentNode.contains(img)) {
                    img.src = 'icons/smartphone_main.png';
                }
            });
        });
    });
}

export default services;