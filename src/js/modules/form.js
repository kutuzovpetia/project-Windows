import inputValidation from './inputValidation';

const forms = (state) => {

    const forms = document.querySelectorAll('form');
    const inputsAll = document.querySelectorAll('input');

    function clearInputs(){
        inputsAll.forEach(item =>{
            item.value = '';
        })
    }

    inputValidation('input[name=user_phone]');
    inputValidation('.popup_calc input');

    const message = {
        loading: 'Загрузка...',
        success: 'Успешно отправлено',
        error: 'Что-то пошло не так'
    }

    async function post(url, data){
        document.getElementById('status').textContent = message.loading;
        const res = await fetch(url,{
            method: "POST",
            body: data,
        })

        return await res.text();
    }

    forms.forEach(form =>{
        form.addEventListener('submit', (e)=>{
            e.preventDefault();
            const formData = new FormData(form);
            const messageStatus = document.createElement('div');
            messageStatus.setAttribute('id', 'status');
            form.append(messageStatus);
            if(form.getAttribute('data-calc') === 'end'){
                 for (let key in state){
                     formData.append(key, state[key]);
                 }
            }

            post('assets/server.php', formData, form)
                .then((res)=>{
                    document.getElementById('status').textContent = message.success;
                    console.log(res);
                    clearInputs();
                }).catch((err)=>{
                    document.getElementById('status').textContent = message.error;
                    console.log(err);
            })

            setTimeout(()=>{
                document.getElementById('status').remove();
            },3000)
        })
    })

}

export default forms;