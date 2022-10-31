const nombre = document.getElementById("name")
const email = document.getElementById ("email")
const form = document.getElementById ("form")
const mensaje = document.getElementById ("message")
const parrafo = document.getElementById ("warnings")

form.addEventListener ("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    parrafo.innerHTML = ""
    if (nombre.value.length <6){
        warnings += `El nombre no es válido <br>`
        entrar = true
    }
    if(!regexEmail.test(email.value)){
        warnings += `El email no es válido <br>`
        entrar = true
    }
    if (mensaje.value.length <1){
        warnings += `El campo de mensaje está vacío <br>`
        entrar = true
    }
    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Enviado"
    }
})