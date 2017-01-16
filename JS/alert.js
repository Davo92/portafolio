//RECORDATORIO PARA ACABAR DE CONCRETAR SWEETALERT
$('#boton').click(EventoAlert);

function EventoAlert(event) {
    event.preventDefault();
    
    swal({
  title: "Bienvenido a mi Curriculum Vitae",
  text: "¡Espero que os guste!.",
  timer: 3000,
  showConfirmButton: false
});
    
   setTimeout(function(){ window.location = "/CURRICULUMVITAE.jpg";}, 3000);
        
}