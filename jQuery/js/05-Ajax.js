$(document).ready(function(){

    /**
    *  LOAD
    **/
    var datos = $("#datos")
    //datos.load("https://reqres.in/")

    /**
     * GET
     */

    $.get("https://reqres.in/api/users",{page:2}, function(response){
        response.data.forEach(element => {
            datos.append("<p>" + element.first_name + "</p>")
        });
    })

    /**
     * POST
    **/

    

    $("#formulario").submit(function(e){
        e.preventDefault()  /**
                             * la variable e captura el evento
                             * para que no redirija, pongo preventDefault
                             * tambien puedo poner un "return false" al final
                            **/ 

        var usuario = {
            name : $('input[name="name"]').val(),
            web : $('input[name="web"]').val()
        }

        console.log(usuario)

        /*
    
        $.post($(this).attr("action"), usuario, function(response){
            console.log(response)
        }).done(avisar => {
            alert("Agregado Correctamente")
        })

        */

        /**
         * OTRA FORMA DE HACER PETICIONES AJAX
        **/
    
        $.ajax({
            type: "POST", // INDICO EL TIPO DE OPERACION
            dataType: "JSON", // JSON/HTML EL DATO QUE VOY A RECIBIR O ENVIAR 
            contentType: "applicaction/JSON", // EN QUE FORMATO VAN A VIAJAR LOS DATOS
            url: $(this).attr("action"), //A QUE URL VOY A HACER LA PETICION
            data: usuario, //LOS OBJETOS QUE ENVIO
            beforeSend: antesHacer => { //ANTES DE ENVIAR HAGA UNA ACCION
                console.log("Enviando Usuario...")
            },
            success: function(response){
                console.log(response)
            },
            error: function(){
                console.log("Hubo un error")
            },
            timeout: 2000 // 2 segundos
        })

    })


    




})