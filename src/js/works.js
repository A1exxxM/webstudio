function worksTab() {
    const tabs = document.querySelectorAll('.works__btn');
    const itemWorks = document.querySelectorAll('.works__item');
    function hideTab() {
        tabs.forEach(tab =>{
            tab.classList.remove('works__btn-active');
        });
    }
    function showTab(i = 0) {
        tabs[i].classList.add('works__btn-active');
    }
    hideTab();
    showTab();
    function filterTabs(elem) {
        itemWorks.forEach(item => {
            if (elem.dataset.type !== item.dataset.type) {
                item.style.display = 'none';
            }
            if (elem.dataset.type == "all") {
                item.style.display = '';
            }
        });
    }
    tabs.forEach((tab,i) => {
        tab.addEventListener('click', ()=>{
            hideTab();
            showTab(i);
            itemWorks.forEach(item => {
                item.style.display = '';
            });
            filterTabs(tab);
        });
    });
    const titles = ['Hand Watch','One Day Pass','Modal T-shirt','Container','Discovery','The Kitchens'];
    const subtitles = ['Web Design', 'UI/UX Design', 'Mockups'];
    itemWorks.forEach((item,i) => {
        const block  = document.createElement('div'),
              titleBlock = document.createElement('div'),
              subtitleBlock = document.createElement('div');
        item.addEventListener('mouseover', (e)=>{
            block.classList.add('works__block');
            titleBlock.classList.add('works__block-title');
            titleBlock.textContent = titles[i];
            subtitleBlock.classList.add('works__block-subtitle');
            if (item.dataset.type == "ui") {
                subtitleBlock.textContent = subtitles[1];
            } else if (item.dataset.type == "web") {
                subtitleBlock.textContent = subtitles[0];
            } else if (item.dataset.type == "mock") {
                subtitleBlock.textContent = subtitles[2];
            } else {
                subtitleBlock.textContent = "Error";
            }
            block.append(titleBlock);
            block.append(subtitleBlock);
            if (e.target.nodeName == 'IMG') {
                e.target.parentNode.appendChild(block);
            }
        });
        item.addEventListener('mouseleave', (e)=>{
            block.classList.remove('works__block');
            if (e.target.classList.contains('works__item')) {
                e.target.removeChild(block);
            }
            
        });
    });


    const btnFull = document.querySelector('.works__full');
    btnFull.addEventListener('click', ()=>{
        itemWorks.forEach(item =>{
            if (item.classList.contains('works__item-hide')) {
                item.classList.remove('works__item-hide');
                item.classList.add('works__item-show');
                btnFull.textContent = 'Hide Part';
            } else if (item.classList.contains('works__item-show')) {
                item.classList.remove('works__item-show');
                item.classList.add('works__item-hide');
                btnFull.textContent = 'View All';
            }
        });
    });
}

export default worksTab;