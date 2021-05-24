const images = () => {
    const wrapperWorks = document.querySelector('.works');
    const modalBack = document.createElement('div');
    const bigImg = document.createElement('img');
    modalBack.classList.add('popup');
    modalBack.style.justifyContent = 'center';
    modalBack.style.alignItems = 'center';
    modalBack.appendChild(bigImg);
    wrapperWorks.appendChild(modalBack);

    wrapperWorks.addEventListener('click', (e)=>{
        e.preventDefault();
        const target = e.target;
        if(target && target.classList.contains('preview')){
            bigImg.src = target.parentNode.getAttribute('href');
            modalBack.style.display = 'flex';
            document.body.style.overflow = 'hidden'
        }

        if (target && target.matches('div.popup')){
          modalBack.style.display = 'none';
          document.body.style.overflow = '';
        }
    })

}

export default images;