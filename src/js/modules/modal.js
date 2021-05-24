const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector){

        const trigger = document.querySelectorAll(triggerSelector);
        const modal = document.querySelector(modalSelector);
        const close = document.querySelector(closeSelector);
        const modalAll = document.querySelectorAll('[data-modal]');
        const scroll = calcScroll();

        function closeModalAll(elem){
            modalAll.forEach(item =>{
                item.style.display = 'none';
            })
        }

        trigger.forEach((item, i) => {
            item.addEventListener('click', (e)=>{
                if (e.target){
                    e.preventDefault();
                }
                closeModalAll(item);
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
                document.body.style.marginRight = scroll +'px';
            })
        })

        close.addEventListener('click', ()=>{
            modal.style.display = 'none';
            document.body.style.overflow = '';
            document.body.style.marginRight = '0px';
            // document.body.classList.remove('modal-open')
        })

        modal.addEventListener('click', (e)=>{
              if(e.target === modal){
                  modal.style.display = 'none';
                  document.body.style.overflow = '';
                  document.body.style.marginRight = '0px';
                  // document.body.classList.remove('')
              }
        })

    }

    function showModalByTime(selectorModal, time){
        setTimeout(()=>{
            document.querySelector(selectorModal).style.display = 'block';
            document.body.style.overflow = 'hidden';
        }, time)
    }

    function calcScroll(){
        let div = document.createElement('div');
        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();
        return scrollWidth;
    }

    bindModal('.popup_engineer_btn', '.popup_engineer','.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    bindModal('.popup_calc_btn','.popup_calc','.popup_calc_close');
    bindModal('.popup_calc_button','.popup_calc_profile','.popup_calc_profile_close');
    bindModal('.popup_calc_profile_button','.popup_calc_end','.popup_calc_end_close');
    // showModalByTime('.popup_engineer', 4000);


};

export default modals;