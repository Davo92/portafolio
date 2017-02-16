
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

        // REFERENCIA A LOS BOTONES DE DIRECCIONAMIENTO DE DESPLAZAMIENTO//
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

        $(document).ready(function(){
            $("#hide5").click(function(){
                $("#variar5").toggleClass("colorear");
            });
        });
    }

    function botones(){
        //CAMBIAR EL TEXTO DEL "BUTTON" AL HACER CLICK DE MOSTRAR/OCULTAR //
        $("#hide").click(function(){
            $("#hide").text(($("#hide").text() ==  'Slide Arriba') ? 'Slide Abajo':'Slide Arriba');
        });

        //REFERENCIA AL CAMBIO DE TEXTO DEL FADE OUT//

        $("#hide2").click(function(){
            $("#hide2").text(($("#hide2").text() ==  'Fade In') ? 'Fade Out':'Fade In');
        });
        //REFERENCIA AL CAMBIO DE TEXTO AL BOTON DE TOGGLE//
        $("#hide3").click(function(){
            $("#hide3").text(($("#hide3").text() == 'Aparecer') ? 'Desaparecer':'Aparecer');
        });

        $("#hide5").click(function(){
            $("#hide5").text(($("#hide5").text() == 'Quitar Clase') ? 'Añadir Clase':'Quitar Clase');
        });
    }

});