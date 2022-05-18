    var count=3;
    $("#btn1").click(function(){calcola("+");});
    $("#btn2").click(function(){calcola("-");});
    $("#btn3").click(function(){calcola("*");});
    $("#btn4").click(function(){calcola("/");});

    function calcola(segno){

        if ($("#N1").val() && $("#N2").val()){
            var n1= +$("#N1").val();
            var n2= +$("#N2").val();
            count++;
            switch(segno) {
                case "+":
                    var res=n1+n2;
                    console.log (res);
                    $("#table").append("<tr><td>"+count+"</td><td>"+n1+"</td><td>+</td><td>"+n2+"</td><td>"+res+"</td></tr>");ì
                break;
                case "-":
                    var res=n1-n2;
                    console.log (res);
                    $("#table").append("<tr><td>"+count+"</td><td>"+n1+"</td><td>-</td><td>"+n2+"</td><td>"+res+"</td></tr>");
                break;
                case "*":
                    var res=n1*n2;
                    console.log (res);
                    $("#table").append("<tr><td>"+count+"</td><td>"+n1+"</td><td>*</td><td>"+n2+"</td><td>"+res+"</td></tr>");
                break;
                case "/":
                    var res=n1/n2;
                    console.log (res);
                    $("#table").append("<tr><td>"+count+"</td><td>"+n1+"</td><td>/</td><td>"+n2+"</td><td>"+res+"</td></tr>");
                break;
            }
        }else{
            alert("COMPLETA TUTTI I CAMPI");
            
        }
    }
