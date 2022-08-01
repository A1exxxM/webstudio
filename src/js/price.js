function price() {
    const priceBtn = document.querySelectorAll('.price__item-order');
    priceBtn.forEach(btn =>{
        btn.addEventListener('mouseover', (e)=>{
            if (btn == e.target) {
                btn.classList.add('price__item-order_active');
            }
        });
        btn.addEventListener('mouseout', (e)=>{
            if (btn == e.target) {
                btn.classList.remove('price__item-order_active');
            }
        });
    });
}

export default price;