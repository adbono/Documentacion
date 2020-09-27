$(document).ready(function(){

    reloadLinks();

    $("#add_button").click(function(){
            $("#add_link").removeAttr("disabled")
            var linkNuevo = $("#add_link").val()
                //$("#menu").html('<li><a href="'+linkNuevo+'"></a></li>')
                if (linkNuevo != ""){
                    $("#menu").append('<li><a href="'+linkNuevo+'"></a></li>')
                    $("#add_link").val("")
                }
                //prepend añade al principio
                //before añade antes del elemento (en este caso fuera de la lista)
                //after idem
            reloadLinks();
    })

    function reloadLinks(){
        $("a").each(function(index){
            var that = $(this)
            var link = that.attr("href")
            that.attr('target','_BLANK')
            that.text(link)
        })
    }
    




})