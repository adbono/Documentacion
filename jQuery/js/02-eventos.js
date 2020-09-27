$(this).ready(function(){
    var caja = $("#caja")

    //MouseOver y MouseOut
    /*
    caja.mouseover(function(){
        $(this).css("background","red")
    })

    caja.mouseout(function(){
        $(this).css("background","green")
    })
    */

    //Hover
    function cambiaRojo(){
        $(this).css("background","red")
    }

    function cambiaVerde(){
        $(this).css("background","green")
    }

    caja.hover(cambiaRojo,cambiaVerde)

    //Click, Doble Click
    caja.click(function(){
        $(this) .css("background","blue")
                .css("color","white")
    })

    caja.dblclick(function(){
        $(this) .css("background","pink")
                .css("color","white")
    })

    /**
     * FOCUS -> cuando hago click
     * y BLUR -> cuando salgo del objeto
     **/
    var nombre = $("#nombre")
    nombre.focus(function(){
         $(this).css("border","10px solid blue")
     })

     nombre.blur(function(){
        $(this).css("border","5px solid black")
        caja.text($(this).val())
     })

     /**
     * mouseDown
     * mouseUp
     **/
    caja.css("border","10px solid")

    caja.mousedown(function(){
        $(this).css("border-color","gray")
    })

    caja.mouseup(function(){
        $(this).css("border-color","black")
    })

    //mousemove
    var sigueme = $("#sigueme")
    $(document).mousemove(function(){
        console.log("x: "+event.clientX+" y:"+event.clientY)
        sigueme.css("left",event.clientX)
        sigueme.css("top",event.clientY)
    })




})