const inputValidation = (selector) => {
    const inputs = document.querySelectorAll(selector);
   inputs.forEach(input=>{
       input.addEventListener('input', (e)=>{
           e.target.value = e.target.value.replace(/\D/g,'').substr(0,13);
       })
   })
}

export default inputValidation;