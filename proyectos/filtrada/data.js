 
var datos = data.results[0].members;  //DATOS COMPILADOS EN EL JSON COMO MEMBERS, COGER SUS RESULTADOS


                crearTabla();

                function crearTabla(){

                    for(var i = 0; i < datos.length; i++){ //BUCLE PARA QUE VAYA COGIENDO 1 A 1 CORRELATIVAMENTE LOS VALORES EN MEMBERS PUESTOS EN LA VAR DATOS 
                        var limpiarDatos = datos[i]["middle_name"] || '';
                        var tr1 = "<tr>"; //SE ABRE EL TR, Y SE PONE EN UNA VAR, PARA DESPUES PODERLE HACER LA LLAMADA DESDE EL JQUERY INTRODUCIDO MÁS ABAJO
                        var td1 = "<td>" + "<a href='" + datos[i] ["url"] + "'>" + datos[i]["last_name"] + ", " + datos[i]["first_name"] + "" +limpiarDatos+"</a>" + "</td>"; //LOS DATOS 'RESULTADOS DE RESULTS.MEMBERS, Y EMPEZANDO DESDE I, QUE TIENE UN VALOR INDICADO POR NOSOTROS DE 0, Y CON EL BUCLE, VA COGIENDO EL SIGUIENTE
                        var td2 = "<td class='type'>" + datos[i]["party"] + "</td>";
                        var td3 = "<td>" + datos[i]["state"] + "</td>";
                        var td4 = "<td>" + datos[i]["seniority"] + "</td>"; 
                        var td5 = "<td>" + datos[i]["votes_with_party_pct"] + "%" + "</td>";
                        var tr2 = "</tr>";


                        $("#senatedata").append(tr1+td1+td2+td3+td4+td5+tr2); //HACEMOS LA LLAMADA A LAS VARIABLES Y LES AÑADIMOS LOS DATOS CON APPEND Y LOS COJEMOS EXACTAMENTE DEL SENATEDATA 'JSON'
                    }}


                // HACE REFERENCIA AL CHECK BOX
                function cogerDatos() {

                    var partys = $("input[name='filterStatus']:checked") //COGEMOS EL VALOR DE LOS IMPUTS CHEKEADOS
                    .map(function () { return $(this).val(); })
                    .get();

                    $("#tablebody tr").each(function (){//COGE LOS DATOS DE TABLEBODY TR, Y COMPARA SI LOS TIENE, Y SINO, LOS BORRA
                        var party = $(this).find(".type").text();
                        var partySelected = filtrarDatos(party, partys);
                        $(this).toggle(partySelected);
                    });
                }

                function filtrarDatos(x, lst) {
                    return lst.length === 0 || lst.indexOf(x) != -1;    
                }


                $("input[name='filterStatus']").on("change", cogerDatos);


                //esta funcion muestra los datos en el selector "filter by state".
                $.each(datos,function(key,value){
                    var option = $("<option />").val(value.state).text(value.state);
                    $("#stateOption").append(option);
                });


                function tablaFiltrada(filtros){
                    datos = filtros;
                    limpiartabla();
                    crearTabla();
                                        //HACEMOS LAS LLAMADAS CORRESPONDIENTES A LAS FUNCIONES

                }

                function limpiartabla(){
                    $("#tablebody").empty(); //para que se borre la tabla, y no nos salga abajo y cargue de nuevo la tabla
                }

                //   //esta funcion filtra los datos de selector y te los muestra en la tabla.
                function updateSelector() {

                    var a = document.getElementById("stateOption"); 
                    var estadoSeleccionado = a.options[a.selectedIndex].text;
                    var filtrarEstado = datos.filter(function(members){
                        return members.state == estadoSeleccionado;  

                    });
                    tablaFiltrada(filtrarEstado);
                }
                
                $("#stateOption").on("change", updateSelector);
                