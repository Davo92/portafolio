 function myFunction() {
                var x = document.getElementById("myTopnav");
                if (x.className === "topnav") {
                    x.className += " responsive";
                } else {
                    x.className = "topnav";
                }
            }

function myFunction2() {
    document.getElementById("demo").innerHTML = "Mobile: 600-600-600";
}

function myFunction3() {
    
    document.getElementById("demo2").innerHTML = "Email: nysl@gmail.com";
}


function myFunction4() {
   // document.getElementById("demo3").innerHTML = // document.getElementById("textHere").value;
    var div = $("<div>").addClass("especial");
    div.text( $('#textHere').val() );
    var name = $("<div>").addClass("especial2");
    name.text( $('#nameHere').val() );
    
    $("#demo3").append(name).append(div);
}


