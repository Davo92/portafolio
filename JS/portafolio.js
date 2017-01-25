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


var indice = 0;
frases = new Array();
frases[0] = "Vamos a crear cosas increíbles juntos.";
frases[1] = "Consigamos los propósitos deseados.";
frases[2] = "Demostremos que nada és imposible.";
frases[3] = "Nunca dejemos de creer.";

indice = Math.random()*(frases.length);
indice = Math.floor(indice);

function rotar() {
    if (indice == frases.length) {indice = 0;}
    document.getElementById("rotando").innerHTML = frases[indice];
    indice++;
    setTimeout("rotar();",5000);

} 

rotar();


