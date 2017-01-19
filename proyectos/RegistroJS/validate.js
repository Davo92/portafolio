//funcion al nombre para saber si esta correcto, y el campo no está vacio//
function f_name(){
    
    var name = document.getElementById("firstname").value;
    if(name === ""){
        alert("Rellena el campo del nombre");
        return false;
    } else { return true; }}
// hyden a la funcion anterior//
function f_lastname(){
    var lastname = document.getElementById("lastname").value;
    if(lastname === ""){
        alert("El campo de apellido esta vacio");
        return false;}
    else{
        return true;
    }
    }
//hyden//
function f_streetaddress(){
    var streetaddress = document.getElementById("streetaddress").value;
    if(streetaddress === ""){
        alert("La dirección esta incompleta");
        return false;}
    else{
        return true;
    }
    }
//hyden//
function f_city(){
    var city = document.getElementById("city").value;
    if(city === ""){
        alert("El campo de tu ciudad, esta vacio");
        return false;}
    else{
        return true;}
    }
    
//comprueba que el numero tenga las condiciones de las variables, si las cumple haga true//
function f_phone(){
  var phone = document.getElementById("phone").value;
  var expresionRegular1=/^\d{3}-\d{3}-\d{3}$/;//<--- con esto vamos a validar el numero
  var expresionRegular2=/\s/;//<--- con esto vamos a validar que no tenga espacios en blanco
  if(phone === ""){
     alert("El campo del telefono es obligatorio");}
    else if(expresionRegular2.test(phone)){
    alert("error existen espacios en blanco");}
  else if(!expresionRegular1.test(phone)){
    alert("Telefono incorrecto, separar 3 digitos con guiones");
    return false;}
    else { return true; }
}

//comprueba que el codigo postal tenga 5digitos//
function f_zipcode(){
    var zipcode = document.getElementById("zipcode").value;
    if(zipcode.length !== 5) {
        alert("El codigo postal tiene que tener 5 caracteres.");
        return false;
    } else {
        return true;
    }
}

// comprueba si el email esta bien
function comprobarEmail() {
    var contactemail = document.getElementById("contactemail").value;
    if (!contactemail.match(/\w+@\w+\.\w+/)){
        alert("La dirección de email es incorrecta.");
        return false;
    } else {
        return true;
    }
}

function CompruebaCheck(){
    if(document.getElementById("haveUniform").checked) {
        
    document.getElementById("cheked").disabled = true;
    document.getElementById("cheked").style.color = "#959595";
    }
    
    else { 
        document.getElementById("cheked").disabled = false;
        document.getElementById("cheked").style.color = "#000000";

        
    }
 
}
function validar(){
    var nametruefalse = f_name();
    var lasttruefalse = f_lastname();
    var streettruefalse = f_streetaddress();
    var citytruefalse = f_city();
    var phonetruefalse = f_phone();
    var zipcodetruefalse = f_zipcode();
    var haveUniform = CompruebaCheck();
    var contactemailtruefalse = comprobarEmail();

    return false;
    
    
    if((nametruefalse && lasttruefalse && streettruefalse && citytruefalse && phonetruefalse && zipcodetruefalse && contactemailtruefalse && haveUniform) === true){
        return true;}
    else{
        return false;}
    }