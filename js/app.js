// Varibles
    //Rereferencias HTML
    const formulario = document.querySelector('#enviar-mail');
    const  email = document.querySelector('#email');
    const  asunto = document.querySelector('#asunto');
    const  mensaje = document.querySelector('#mensaje');

    const btnEnviar = document.querySelector('#enviar');
    const loader = document.querySelector('#loaders');

    const btnReset = document.querySelector('#resetBtn');

//Funciones
const inicioApp =()=>{
    btnEnviar.disabled = true;
}

//Creamos la funcion para la validacion de los campos
const validarCampo =(e)=>{
    //Se validad la longitud del texto y que no este vacio
    validarLongitud(e.target);

    //Validar unicamente le email
    if(e.target.type === 'email'){
        validarEmail(e.target);
    }
  
    let errores = document.querySelectorAll('.error');
    if(email.value !=='' && asunto.value!=='' && mensaje.value !==''){
        if(errores.length===0){
            btnEnviar.disabled = false;
        }
    }
}

const validarLongitud=(campo)=>{
   if(campo.value.length>0){
    campo.style.borderBottomColor ='green';
    campo.classList.remove('error');      
   }else{
    campo.style.borderBottomColor ='red';
    campo.classList.add('error');  
   }
}
//Validar Email
const validarEmail =(campo)=>{
    const mensaje = campo.value;
    if(mensaje.indexOf('@')!==-1){ //Si lo encontró
        campo.style.borderBottomColor ='green';
        campo.classList.remove('error');  
    }else{
        campo.style.borderBottomColor ='red';
        campo.classList.add('error');
    }
}

//Agregamos la funcion de enviar e-mail
const enviarMail =(e)=>{

       //Mostramos el spinner de envio 
        const spinnerGif = document.querySelector('#spinner');
        spinnerGif.style.display = 'block';
       //Creamos el gif de envio del email
       const mailGif = document.createElement('img');
       mailGif.width ='150';
       mailGif.src='img/mail.gif';

       setTimeout(() => {
           spinnerGif.style.display = 'none';
           loader.appendChild(mailGif);
           setTimeout(() => {
            //mailGif.style.display = 'none';
               mailGif.remove();
               formulario.reset();
           }, 5000);
       }, 3000);
      e.preventDefault();

}

//Creamos la funcion que me permite resetear el formulario
const resetearForm=(e)=>{
  e.preventDefault();
    formulario.reset();
}
//Event Listener

const eventListeners = ()=> {
    //Inicio de la aplicacion
    document.addEventListener('DOMContentLoaded', inicioApp)
    //Agregamos el evento blur para los campos de formulario
        //El evento blur hace que nuestro dispara cuando salimos del input
    email.addEventListener('blur',validarCampo);
    asunto.addEventListener('blur',validarCampo);
    mensaje.addEventListener('blur',validarCampo);
    formulario.addEventListener('submit',enviarMail);

    btnReset.addEventListener('click',resetearForm);
}

eventListeners();
