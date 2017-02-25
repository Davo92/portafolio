
//EL TEXTO DESAPARECE, O APARECE AL HACER CLICK "TOGGLE//
$(document).ready(function(){
    $("#cambio7").show();

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
            $("#variar2").fadeToggle(750);
        });


        // EL TEXTO APARECE Y DESAPARECE AL HACER CLICK //
        $("#hide3").click(function(){
            $('#variar3').toggle();

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


        $("#hide5").click(function(){
            $("#variar5").toggleClass("colorear");
        });
        
        //ELIMINAR UNA LINEA DE TEXTO EN CONCRETO//
            $("#hide6").click(function(){
                $("#variar6").toggle();
            });

        //MOSTRAR EN DIV CON SLIDD TOGGLE Y PODERLO PARAR CUANDO QUIERAS Y REANUDARLO DESPUES//
            $("#hide7").click(function(){
                $("#cambio7").slideToggle(6000);
            });
            $("#hide7i").click(function(){
                $("#cambio7").stop();
            });
        
        //CAMBIA TEXTO AL HACER CLICK EN EL BOTON
        $("#hide8").click(function(){
            $("#cambio8").text(($("#cambio8").text() == 'He cambiado') ? 'Voy a cambiar':'He cambiado');
        });
        
        //CAMIAR UN PARRAFO POR UN BOTON Y VICEVERSA//
        $("#hide9").click(function(){
            $("#cambio9").html(($("#cambio9").html() == '<button class="extra" onclick="alerta()">Nuevo Botón</button>') ? '<p>Soy un Texto</p>':'<button class="extra" onclick="alerta()">Nuevo Botón</button>');
        });
        
        $("#hide10").click(function(){
            $("#variar10").toggleClass("especial");
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

        $("#hide6").click(function(){
            $("#hide6").text(($("#hide6").text() == 'Añadir 2ª Línea') ? 'Quitar 2ª Línea':'Añadir 2ª Línea');
        });

        $("#hide8").click(function(){
            $("#hide8").text(($("#hide8").text() == 'Devolver Texto') ? 'Cambiar Texto':'Devolver Texto');
        });

        $("#hide9").click(function(){
            $("#hide9").text(($("#hide9").text() == 'Devolver Texto') ? 'Crear botón':'Devolver Texto');
        });
        
        $("#hide10").click(function(){
            $("#hide10").text(($("#hide10").text() == 'Quitar Clase') ? 'Dar Clase Especial':'Quitar Clase');
        });

    }

});

function alerta() {
    alert("Soy un botón con un mensaje de alerta");
}