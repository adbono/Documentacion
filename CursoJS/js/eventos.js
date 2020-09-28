'use strict'

//Eventos de mouse

window.addEventListener("load", function(){

	var boton = document.querySelector("#boton")
	boton.addEventListener("click", funsion => cambiarColor())


	function cambiarColor(){
		if(boton.style.background == ""){
			boton.style.background = "red"

		}else{
			boton.style.background = ""
		}

		
		boton.style.padding = "10px"
		boton.style.border = "1px solid #ccc"
	}

	//mouse over

	boton.addEventListener("mouseover", function(){
		boton.style.background = "yellow"
	} )

	//mouse out

	boton.addEventListener("mouseout", function(){
		boton.style.background = "#ccc"
	} )


	//focus
	var input = document.querySelector("#campo_nombre")
	input.addEventListener("focus", funcion => console.log("[Focus] estoy dentro del input"))


	//blur
	var input = document.querySelector("#campo_nombre")
	input.addEventListener("blur", funxion => console.log("[blur] estoy fuera del input"))


	//keydown
	var input = document.querySelector("#campo_nombre")
	input.addEventListener("keydown", funsion => console.log("Estas pulsando esta tecla ", String.fromCharCode(event.keyCode)))

	//ketpress

	//keyup
	})