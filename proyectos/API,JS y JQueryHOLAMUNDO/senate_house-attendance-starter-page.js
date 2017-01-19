
                var i = 0;
                var members = data.results[0].members;
                var reps_pct = 0;
                var demo_pct = 0; //ESTAN EN 0, YA QUE ES EL RESULTADO QUE TIENEN, Y DEBEREMOS AUMENTARLA CON NUMEROS, Y NO CON DATOS, LITERALMENTE, QUEREMOS EL NUMERO DE VOTANTES DE CADA PARTIDO, ETC..
                var indep_pct = 0;

                while(i < members.length){
                    switch (members[i].party) { //se usa para realizar diferentes acciones basadas en diferentes condiciones
                        case "R" : 
                            stadistics.republicans.votesReps++; //hace referencia al incremento en el numero de nuestras estadisticas
                            var number = members[i].votes_with_party_pct;
                            reps_pct += parseFloat( number ); // converting string en numero, y poder operar con ellos
                            break;
                        case "D" :
                            stadistics.democrats.votesReps++;
                            demo_pct += parseFloat( number );
                            break;
                        case "I": 
                            stadistics.independent.votesReps++;
                            indep_pct += parseFloat( number );
                    }

                    i++;
                }

                // caclcular porcentaje
                reps_pct = reps_pct / stadistics.republicans.votesReps; //resultado de bucle, que me haga la operacion en este caso dividir por sus miembros
                stadistics.republicans.votes_pct = reps_pct.toFixed(2); //el resultado final, haga un toFixed() para poder dejar con los decimales deseados

                demo_pct = demo_pct / stadistics.democrats.votesReps;
                stadistics.democrats.votes_pct = demo_pct.toFixed(2);

                indep_pct = indep_pct / stadistics.independent.votesReps;
                stadistics.independent.votes_pct = indep_pct.toFixed(2);

                var rellenarTabla = function(){ //hacemos una funcion, y dentro de estas, que se ejecuten los jquery, para que en la id elegida, coja del data.js, los datos conseguidos en el bucle anterior, y te los introduce en la tabla.

                    $("#reps_votes").html(stadistics.republicans.votesReps);
                    $("#reps_pct").html(stadistics.republicans.votes_pct + "%");

                    $("#demo_votes").html(stadistics.democrats.votesReps);
                    $("#demo_pct").html(stadistics.democrats.votes_pct + "%");

                    $("#indep_votes").html(stadistics.independent.votesReps);
                    $("#indep_pct").html(stadistics.independent.votes_pct + "%");   

                }

                function llenarTabla (){

                    function filtrarDatos (){ 

                        var miembros = data.results[0].members; 
                        var filtro = miembros.filter(function(a){ 
                            return a.missed_votes_pct >= 7.5;
                        });

                        return filtro; 
                    }

                    var table = filtrarDatos(); 

                    var i = 0;

                    while(i < table.length){ 
                        var tr = "<tr>"; 
                        var td = "<td>" + table[i].first_name + "</td>"; 
                        var td1 = "<td>" + table[i].missed_votes + "</td>";
                        var td2 = "<td>" + table[i].missed_votes_pct + "%" + "</td>";
                        var tr1 = "</tr>";
                        $("#votosPerdidos").append(tr+td+td1+td2+tr1);
                        i++;
                    }
                } 

                function completarTabla (){

                    function filtrarDatos (){ //  Declaramos una funcion donde añadiremos los filtros que queremos.

                        var miembros = data.results[0].members; // añadimos en una var los datos compilados en json
                        var filtro = miembros.filter(function(a){ // hacemos una var, e indicamos el tipo filtro que queremos
                            return a.missed_votes_pct <= 0.45;
                        });

                        return filtro; // le indica el resultado despues de filtrarlo, y lo mete dentro de la funcion filtrarDatos().
                    }

                    var table = filtrarDatos(); // hacemos una var "table" y le damos el valor despues de haber filtrado, en este caso a la funcion filtrarDatos()

                    var i = 0;

                    while(i < table.length){ // hacemos un un bucle, para que vaya cogiendo los datos de json uno a uno, hasta llegar al final
                        var tr = "<tr>"; 
                        var td = "<td>" + table[i].first_name + "</td>"; 
                        var td1 = "<td>" + table[i].missed_votes + "</td>";
                        var td2 = "<td>" + table[i].missed_votes_pct + "%" + "</td>";
                        var tr1 = "</tr>";
                        $("#votosPerdidos2").append(tr+td+td1+td2+tr1); //con jquery, añadimos las celdar que se añadiran en este caso los datos cogidos de json, en tr y td
                        i++; //el bucle es en incremento, hasta llegar al final.
                    }
                }   