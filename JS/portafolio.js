function f_name(){
    
    var name = document.getElementById("nombre").value;
    if(name === ""){
        alert("Rellena el campo del nombre");
        return false;
    } else { return true; }}

function comprobarEmail() {
    var contactemail = document.getElementById("email").value;
    if (!contactemail.match(/\w+@\w+\.\w+/)){
        alert("La dirección de email es incorrecta.");
        return false;
    } else {
        return true;
    }
}

function validar(){
    var name = f_name();
    var email = comprobarEmail();
    
    if(name && email){
        return true;
    } else{
        return false;
    }
}


function enviarContacto(){
 
    if (validar()) {
        alert("Gracias por tu mensaje");
    } else {
        return false;
    }
    

}
    