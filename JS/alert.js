$('#boton').click(EventoAlert);

function EventoAlert(event) {
    event.preventDefault();
    
    swal({
  title: "Bienvenido a mi Curriculum Vitae",
  text: "¡Espero que os guste!.",
  timer: 3000,
  showConfirmButton: false
});
    
   setTimeout(function(){ window.location = this.href;}, 3000);
        
    /*swal({
  title: "Bienvenido a mi Curriculum Vitae",
  text: "¡Espero que os guste!.",
  timer: 4000,
  showConfirmButton: false
});*/
}