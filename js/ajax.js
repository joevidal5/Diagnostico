$(document).ready(function(){

    $('#anillos').click(function(){
        $('#principal').load("productos/anillos.html");
    })

    $('#productosMujeres').click(function(){
        $('#principal').load("productosMujeres.html");
    })

    $("#volver").click(function(){
        location.reload(true);
    })

   
});