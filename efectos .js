
//EL TEXTO DESAPARECE, O APARECE AL HACER CLICK "TOGGLE//
$(document).ready(function(){

    funcionesIniciales();

    function funcionesIniciales() {

        botones();
        animaciones();
    }

    function animaciones(){
    //EL TEXTO SE OCULTA Y APARECE AL HACER CLICK AL BOTON "TOGGLE"//
        $("#hide").click(function(){
            $("#variar").animate({
                height: 'toggle'
            });
        });
        
    //EL TEXTO SE DESVANECE Y APARECE AL HACER CLICK "FADEOUT FADE IN = FADETOGGLE"//
        $("#hide2").click(function(){
            $("#variar2").fadeToggle(750)
        });
    }    
    
    

    function botones(){
        //CAMBIAR EL TEXTO DEL "BUTTON" AL HACER CLICK DE MOSTRAR/OCULTAR //
        $("#hide").click(function(){
            $("#hide").text(($("#hide").text() ==  'Mostrar') ? 'Ocultar':'Mostrar');
        });



        $("#hide2").click(function(){
            $("#hide2").text(($("#hide2").text() ==  'Fade In') ? 'Fade Out':'Fade In');
        });

    }





    
    
});