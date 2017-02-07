function soloNumeros(nums){
    var key = nums.keyCode || nums.which;
    var teclado = String.fromCharCode(key);
    var numeros = "0123456789";
    var especiales = "8-37-39-46";
    var teclaEspecial = false;

    for( var i in especiales){
        if(key == especiales[i]){
            teclaEspecial=true;
        }
    }

    if(numeros.indexOf(teclado)==-1 && !teclaEspecial){
        return false;
    }
}

function retornarValor(num){
    var anterior = document.for.valores.value;

    document.getElementById("valores").value = anterior+num;
}

//eliminar último caracter//

function eliminarNum(){
    var anterior = document.for.valores.value;
    var nuevoValor = 
        anterior.substring(0,anterior.length-1);

    document.getElementById("valores").value = nuevoValor;
}

//eliminar todo//
function eliminarTodo(){
    document.for.valores.value="";
}


//comprobar que hay en el campo//
function comprobar(num){
    var anterior = document.for.valores.value;
    if(anterior == ""){
        document.for.vaores.value="";
    }else{
        var anterior = document.for.valores.value;
        document.getElementById("valores").value=anterior+num;
        var esto = document.for.valores.value;

        var record = 0;
        var igual = 1;
        var letraRecord
        var b = 0;
        var letra = "";

        for(var a = 1; a < esto.length; a++){
            if(esto.charAt(a)=="+" || esto.charAt(a)=="-" || esto.charAt(a)=="*" || esto.charAt(a)=="/"){
                igual=igual+1;
                letra=esto.charAt(a);
            }else{
                if(igual>record){record=igual; letraRecord=letra}
                igual=1;
            }

            var b = a;
        }

        if(igual>record){
            record=igual;
            letraRecord=letra;
        }
        if(record>2){
            var anterior = esto;
            var nuevoValor = anterior.substring(0, anterior.length -1);
            document.getElementById("valores").value = nuevoValor;
            var record=0;
            var b=0;
            var igual=1;
            var letra="";
            var letraRecord="";
        }    
    }
}


//realizar las operaciones//

function calcular(){
    var resultado=eval(document.for.valores.value);
    
    document.for.valores.value = resultado;
}