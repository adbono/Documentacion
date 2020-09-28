'use strict'

if(typeof(Storage) !== 'undefined'){
	console.log("LocalStorage ok")
}else{
	console.log("LocalStorage Incompatible!!!")
}


//grabar
localStorage.setItem("titulo", "Curso de JavaScript")

//leer
document.querySelector("#peliculas").innerHTML = localStorage.getItem("titulo")

//guardar objetos

var usuario = {
	nombre: "Ariel del Bono",
	email: "arieldelbono@gmail.com",
	web: "ADB.com"
}

//tengo que convertir los datos en string, no puedo enviarlos en JSON puro
//tengo que guardar en JSON String o numero
//tambien se usa asi para enviar a una API

localStorage.setItem("usuario", JSON.stringify(usuario))

//recuperar objeto

var userjs = JSON.parse(localStorage.getItem("usuario"))
document.querySelector("#datos").append(userjs.web)


//borrar localStorage
localStorage.removeItem("usuario")
localStorage.clear() //clear borra todo el localstorage