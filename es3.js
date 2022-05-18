    var count=3;
    $("#btn1").click(function(){
        var n1= +$("#N1").val();
        var n2= +$("#N2").val();
        var res=n1+n2;
        console.log (res);
        $("#table").append("<tr><td>"+count+"</td><td>"+n1+"</td><td>+</td><td>"+n2+"</td><td>"+res+"</td></tr>");
        count ++;
    });
    $("#btn2").click(function(){
        var n1=$("#N1").val();
        var n2=$("#N2").val();
        var res=n1-n2;
        console.log (res);
        $("#table").append("<tr><td>"+count+"</td><td>"+n1+"</td><td>-</td><td>"+n2+"</td><td>"+res+"</td></tr>");
        count ++;
    });
    $("#btn3").click(function(){
        var n1=$("#N1").val();
        var n2=$("#N2").val();
        var res=n1*n2;
        console.log (res);
        $("#table").append("<tr><td>"+count+"</td><td>"+n1+"</td><td>*</td><td>"+n2+"</td><td>"+res+"</td></tr>");
        count ++;
    });
    $("#btn4").click(function(){
        var n1=$("#N1").val();
        var n2=$("#N2").val();
        var res=n1/n2;
        console.log (res);
        $("#table").append("<tr><td>"+count+"</td><td>"+n1+"</td><td>/</td><td>"+n2+"</td><td>"+res+"</td></tr>");
        count ++;
    });