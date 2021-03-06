var config = {
    apiKey: "AIzaSyBLfHbRmP-tBKxjdvOSMp8xF-lG6t7OvbE",
    authDomain: "blog-ignasi.firebaseapp.com",
    databaseURL: "https://blog-ignasi.firebaseio.com",
    storageBucket: "blog-ignasi.appspot.com",
    messagingSenderId: "647249006776"
};
firebase.initializeApp(config);



// Obtiene los datos escritos por el usuario
function getDetails() {

    var contactDetails = {

        name: $("#nombre").val(),
        email: $("#email").val(),
        empresa: $("#empresa").val(),
        comentario: $("#comentario").val()
    };

    return contactDetails;
}

function writeDetails() {

    console.log("procesando formulario");

    // obtener los datos escritos por el usuario
    var detalles = getDetails();
    console.log("Details", detalles);


    // guardarlos en firebase

    var detailsId = firebase.database().ref().child('details').push().key; // crear id para el detalle que vamos a guardar
    console.log("key", detailsId);

    firebase.database().ref('details/' + detailsId).set(detalles); // guardar los detalles con el id generado

    console.log("Guardado");
} 



firebase.database().ref('details').on('value', function(snapshot) {
    

    // mostrar los detalles en la pagina
    var allDetails = snapshot.val();
        for (var key in allDetails) {
        var comentario = $("#demo");
        var nombreMail = $("#demo");
        nombreMail.append("<div class='especial2'>"+allDetails[key].name + ": " + "<br>" + allDetails[key].email + "</div>");
        comentario.append("<div class='especial'>"+allDetails[key].comentario + "</div><br>");
    comentario.empty();
        
    
    }
});