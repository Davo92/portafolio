
//EL TEXTO DESAPARECE, O APARECE AL HACER CLICK "TOGGLE//
$(document).ready(function(){

    funcionesIniciales();

    function funcionesIniciales() {

        botones();
        animaciones();
    }

    function animaciones(){
        //EL TEXTO SE OCULTA Y APARECE DESDE ABAJO AL HACER CLICK AL BOTON//
        $("#hide").click(function(){
            $("#variar").animate({
                height: 'toggle'
            });
        });

        //EL TEXTO SE DESVANECE Y APARECE AL HACER CLICK "FADEOUT FADE IN = FADETOGGLE"//
        $("#hide2").click(function(){
            $("#variar2").fadeToggle(750)
        });


        // EL TEXTO APARECE Y DESAPARECE AL HACER CLICK //
        $("#hide3").click(function(){
            $('#variar3').toggle()

        }); 

       $( "#derecha" ).click(function() {
  $( ".palabra" ).animate({ "left": "+=30px" }, "slow" );
});
 
$( "#izquierda" ).click(function(){
  $( ".palabra" ).animate({ "left": "-=30px" }, "slow" );
});
        $( "#arriba" ).click(function(){
  $( ".palabra" ).animate({ "top": "-=30px" }, "slow" );
});
        $( "#abajo" ).click(function(){
  $( ".palabra" ).animate({ "top": "+=30px" }, "slow" );
});
    }

    function botones(){
        //CAMBIAR EL TEXTO DEL "BUTTON" AL HACER CLICK DE MOSTRAR/OCULTAR //
        $("#hide").click(function(){
            $("#hide").text(($("#hide").text() ==  'Slide Arriba') ? 'Slide Abajo':'Slide Arriba');
        });



        $("#hide2").click(function(){
            $("#hide2").text(($("#hide2").text() ==  'Fade In') ? 'Fade Out':'Fade In');
        });

        $("#hide3").click(function(){
            $("#hide3").text(($("#hide3").text() == 'Aparecer') ? 'Desaparecer':'Aparecer');
        });
    }

});