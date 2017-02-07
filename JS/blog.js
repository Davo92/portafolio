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
        
    
    }
});

//Cambia los valores con REF, para modificarlos por los introducidos por el usuario//
function writeUserData(userId, name, email, empresa, comentario) {

    firebase.database().ref('users/' + userId).set({
        username: name,
        email: email,
        empresa: empresa,
        comeentario: comentario,
    });
}

// 
function writeNewPost(uid, username, picture, title, body) {
    // A post entry.
    var postData = {
        author: username,
        uid: uid,
        body: body,
        title: title,
        starCount: 0,
        authorPic: picture
    };


    // Get a key for a new Post.
    var newPostKey = firebase.database().ref().child('posts').push().key;

    // Write the new post's data simultaneously in the posts list and the user's post list.
    var updates = {};
    updates['/posts/' + newPostKey] = postData;
    updates['/user-posts/' + uid + '/' + newPostKey] = postData;
    firebase.database().ref().update(updates);

    document.write("Enviado satisfactoriamente");

    return false; // en el on submit, inpida el refresco de página al enviar el formulario //
}

