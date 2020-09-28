"use strict"

window.addEventListener("load", function(){

	//timer

	function intervalo(){
		var tiempo = setInterval(function(){
			console.log("Set interval ejecutando")

			var titulo = document.querySelector("h1")
			
			if(titulo.style.fontSize != "50px"){
				titulo.style.fontSize = "50px"
			}else{
				titulo.style.fontSize = "30px"
			}		
		}, 500)
		return tiempo
	}

	//setTimeOut se ejecuta 1 sola vez cuando termine el tiempo

	var tiempo = intervalo()
	var stop = document.querySelector("#stop")

	stop.addEventListener("click", function(){
			clearInterval(tiempo)
			alert("Paraste el tiempo")
		})

	var start = document.querySelector("#start")
	start.addEventListener("click", function(){
			intervalo()
		})

})