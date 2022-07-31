function header() {
    const wrapper = document.querySelector('.header__wrapper');
    wrapper.style.display = 'none';
    setTimeout(function(){
        wrapper.style.display = '';
        wrapper.classList.add('animate__animated', 'animate__fadeInDown');
    }, 1000);


    function scrollToBlock(selector,point) {
        selector.addEventListener('click', (e)=>{
            e.preventDefault();
            point.scrollIntoView({behavior: "smooth"});
        });
    }
    const aboutBlock = document.querySelector('#about'),
          aboutPoint = document.querySelector('.about'),
          serviceBlock = document.querySelector('#servicing'),
          servicePoint = document.querySelector('.services'),
          portfolioBlock = document.querySelector('#portfolio'),
          portfolioPoint = document.querySelector('.works'),
          blogBlock = document.querySelector('#blog'),
          blogPoint = document.querySelector('.blog'),
          contactsBlock = document.querySelector('#contacts'),
          contactsPoint = document.querySelector('.contacts'),
          teamBlock = document.querySelector('#team'),
          teamPoint = document.querySelector('.team');
    
    scrollToBlock(aboutBlock,aboutPoint);
    scrollToBlock(serviceBlock,servicePoint);
    scrollToBlock(portfolioBlock,portfolioPoint);
    scrollToBlock(blogBlock,blogPoint);
    scrollToBlock(contactsBlock,contactsPoint);
    scrollToBlock(teamBlock,teamPoint);
}

export default header;