
$(document).ready(function(){
    console.log("una vez que la pagina cargada")

    /* SELECTOR DE ID */
    //con el metodo CSS puedo cambiar el estilo
    var rojo = $("#rojo").css("background","red")
    rojo.css("color","yellow")
    
    var amarillo = $("#amarillo")
    amarillo.css("background","yellow")

    //no hace falta guardarlo en variable para hacer una modificacion

    $("#verde").css("background","green")

    /*************************************************************/
    /* SELECTOR DE CLASE */
    var mi_clase = $(".parrafo")
    mi_clase.css("border","3px dashed")

    $("p").click(function(){
        $(this).addClass("clickeado")
    })

    /*************************************************************/
    /* SELECTOR DE ETIQUETA */

    var parrafos = $("p")
    var esto = $(this)
    parrafos.click(function(){
        if(!esto.hasClass("clickeado2veces")){
            esto.addClass("clickeado2veces")
        }
    })

    /*
     * puede hacer var esto = $(this)
     * y usar esto en vez de la varible reservada
     */

     /*************************************************************/
    /* SELECTOR DE ATRIBUTOS */

    $('[title="Google"]').css("background","red")

     /*************************************************************/
    /* SELECCION DE ELEMENTO DENTRO DE OTRO */
    var resaltado = $("#caja .resaltado")
    /* o sino */
    resaltado = $("#caja").find(".resaltado")
    /*
     *El metodo FIND busca los elementos inidicados dentro del elemento que lo llama 
     */
    resaltado = $("#caja").find(".resaltado").eq(0).parent().parent()
    //Le digo que me paro en el primer elemento (eq(0)) y con parent subo un nivel
    console.log(resaltado)

})

/* el signo $ hace referencia a jquery */


