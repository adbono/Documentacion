$(document).ready(function(){

    var caja = $("#caja")

    $("#mostrar").hide()

    $("#mostrar").click(function(){
        $(this).hide()
        $("#ocultar").show()
        caja.show("normal")
        /* le puedo asignar FAST - NORMAL - buscar para otras transiciones */
        /*  
        * $("#caja").fadeIn("slow") -> es otro efecto
        * $("#caja").fadeOut("slow") -> es otro efecto
        * $("#caja").fadeTo("slow",1) -> 
        *            fadeto(velocidad,opacidad)
        *             1 -> mostrar, 0 -> ocultar)
        * $("#caja2").slideDown("fast")
        * $("#caja2").slideUp("fast")
        * 
        ***********************************************************
        * Si agrego una funcion de callBack, 
        * puedo hacer que ejecute algo cuando termine la operacion
        * 
        *   $("#caja2").slideUp("fast", function(){
        *       ejecutarEstoDespuesDeTerminarLaOperacion()
        *   })
        ***********************************************************
        */
    })

    $("#ocultar").click(function(){
        $(this).hide()
        $("#mostrar").show()
        caja.hide("fast")
    })

    var caja2 = $("#caja2")


    $("#todoenuno").click(function(){
        caja2.toggle("fast")
        /*
         * caja2.slideToggle("fast")
         
         */
    })

    /*ANIMACIONES*/

    $("#animame").click(function(){
        caja2.animate({
            marginLeft: "500px",
            fontSize: "40px",
            height: "60px"
        }, "slow")
        .animate({
            borderRadius: "900px",
            marginTop: "300px"
        }, "slow")
        .animate({
            borderRadius: "0px",
            marginTop: "0px",
            marginLeft: "0px"
        },"fast")
    })








})