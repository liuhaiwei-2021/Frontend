const form = document.querySelector('#reForm');
const email = document.querySelector('#emailAdress');

const validate = (id) =>{
    let input = document.querySelector('#' + id)
    if(input.value==='' || input.value.length < 2){
        input.classList.add('is-invalid');
        input.focus();
        return false;
    }
    else{
        input.classList.remove('is-invalid');
        input.classList.add('is-valid');
        return true;
    }
}

const  emailVlidate = (email) =>{
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value)){
    email.classList.remove('is-invalid');
    email.classList.add('is-valid');
    return true;
    }else{
    email.classList.remove('is-valid');
    email.classList.add('is-invalid');
    return false;
  }
  console.log(email);
}
errors =[];
form.addEventListener('submit',function(e){
    e.preventDefault();
    console.log(e.currentTarget[0]);
    console.log(email);
    for(let i=0;i<e.currentTarget.length;i++){
        if(e.currentTarget[i].type ==='text'){
        validate(e.currentTarget[i].id);
        errors[i] = validate(e.currentTarget[i].id)
        }else{
        emailVlidate(email);
        errors[i] = emailVlidate(email);
        }
    }
    if(errors.includes(false)){
        console.log('det finns fel');             
    }else{
        console.log('all är rätt');}
    
})


