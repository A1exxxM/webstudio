function modal() {
    const submitBtn = document.querySelector('.contacts__submit'),
          modal = document.querySelector('.modal'),
          modalClose = document.querySelector('.modal__close'),
          form = document.querySelector('.contacts__form');
    function showModal() {
        modal.classList.add('modal_active','animate__animated','animate__fadeIn');
    }
    function closeModal() {
        modal.classList.remove('modal_active','animate__animated','animate__fadeIn');
    }
    form.addEventListener('submit',(e)=>{
        e.preventDefault();
        showModal();
    });
    modalClose.addEventListener('click',()=>{
        closeModal();
        form.reset();
    });
    modal.addEventListener('click', (e)=>{
        if (e.target === modal) {
            closeModal();
            form.reset();
        }
    });
}

export default modal;