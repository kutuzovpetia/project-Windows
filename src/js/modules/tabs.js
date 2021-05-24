const tabs = (wrap, tab, content, classAct, display = 'block') => {

    const wrapper = document.querySelector(wrap);
    const tabsAll = document.querySelectorAll(tab);
    const contentAll = document.querySelectorAll(content);

    function hide(){
        contentAll.forEach(item =>{
            item.style.display = 'none';
        })

        tabsAll.forEach(item =>{
            item.classList.remove(classAct);
        })
    }

    function show(i = 0){
        contentAll[i].style.display = display;
        tabsAll[i].classList.add(classAct);
    }

    wrapper.addEventListener('click', (e)=>{
        const target = e.target;
        if(target && (target.classList.contains(tab.replace('.','')) || target.parentNode.classList.contains(tab.replace('.','')))){
            tabsAll.forEach((item, i)=>{
                 if(target === item || target.parentNode === item){
                     hide();
                     show(i);
                 }
            })
        }
    })

    show();
}

export default tabs;