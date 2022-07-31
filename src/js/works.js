function worksTab() {
    const tabs = document.querySelectorAll('.works__btn');
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
    const itemWorks = document.querySelectorAll('.works__item');
    const titles = ['Hand Watch','One Day Pass','Modal T-shirt','Container','Discovery','The Kitchens'];
    const subtitles = ['Web Design', 'UI/UX Design', 'Mockups'];
    itemWorks.forEach(item => {
        item.addEventListener('mouseover', (e)=>{
            const block  = document.createElement('div');
        });
    });
}

export default worksTab;