"use strict"

window.addEventListener("load", function(){
	console.log("DOM cargado")

	var formulario = document.querySelector("#formulario")
	var box_dashed = document.querySelector(".dashed")
	box_dashed.style.display = "none"

	formulario.addEventListener("submit", function(){
		var nombre 		= document.querySelector("#nombre").value
		var apellido 	= document.querySelector("#apellido").value
		var edad 		= parseInt(document.querySelector("#edad").value)

		if(nombre.trim() == null || nombre.trim().length == 0){
			document.querySelector("#error_nombre").innerHTML = "<p>El nombre no es valido!<p>"
			return false
		}else{
			document.querySelector("#error_nombre").style.display = "none"
		}

		if(apellido.trim() == null || apellido.trim().length == 0){
			alert("El apellido no es valido")
			return false
		}

		if(isNaN(edad)){
			alert("la edad no es valida")
			return false
		}

		console.log("Nombre: " + nombre)
		console.log("Apellido: " + apellido)
		console.log("Edad: " + edad)

		box_dashed.style.display = "block"

		var p_nombre = document.querySelector("#p_nombre span")
		var p_apellido = document.querySelector("#p_apellido span")
		var p_edad = document.querySelector("#p_edad span")

		p_nombre.innerHTML = nombre
		p_apellido.innerHTML = apellido
		p_edad.innerHTML = edad

		

	})
})

