const changeModalState = (state) => {
    const windowForm = document.querySelectorAll('.balcon_icons_img'),
        windowWidth = document.querySelectorAll('#width'),
        windowHeight = document.querySelectorAll('#height'),
        windowType = document.querySelectorAll('#view_type'),
        windowProfile = document.querySelectorAll('.checkbox');

    const addListener = (elem, event, prop) =>{
        elem.forEach((item, i)=>{
            item.addEventListener(event, (e)=>{
                switch (item.nodeName) {
                    case 'INPUT':
                        if(item.getAttribute('type') === 'checkbox'){
                            i === 0 ? state[prop] = 'Холодное': state[prop] = 'Теплое';
                            elem.forEach((el, j)=>{
                                el.checked = false;
                                if(i == j){
                                    el.checked = true;
                                }
                            })
                        }else{
                            state[prop] = item.value;
                        }
                        break;
                    case 'SPAN': state[prop] = i;
                        break;
                    case 'SELECT': state[prop] = item.value;
                        break;
                }

                console.log(state)
            });
        })
    }

    addListener(windowForm, 'click', 'form');
    addListener(windowHeight, 'input', 'height');
    addListener(windowWidth, 'input', 'width');
    addListener(windowType, 'change', 'type');
    addListener(windowProfile, 'change', 'profile');



};

export default changeModalState;