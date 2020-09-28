"use strict"

//fetch(ajax) y peticiones a servicios / apis rest
//fetch es un metodo que hace peticiones AJAX asincronicas

var div_usuario = document.querySelector("#usuarios")
var div_janet = document.querySelector("#janet")


fetch("https://reqres.in/api/users?page=1")
	.then(data => {
		console.log(data)
		//aca peudo ver todos los metodos que tengo disponibles para traer
	})

getUsuarios()
	.then(data => data.json())
	.then(users => {
		listadoUsuarios(users.data)
		return getJanet()
	})
	.then(data => data.json())
	.then(user => {
		mostrarJanet(user.data)
	})

	function getUsuarios(){
		return fetch("https://reqres.in/api/users?page=1")
	}

	function getJanet(){
		return fetch("https://reqres.in/api/users/2")
	}

	function listadoUsuarios(usuarios){
		usuarios.map((user, i) => {
		let nombre = document.createElement('h3')
		nombre.innerHTML = i + ". " + user.first_name + " " + user.last_name
		div_usuario.appendChild(nombre)
		document.querySelector(".loading").style.display = 'none'

		});
	}

	function mostrarJanet(user){
		let nombre = document.createElement('h4')
		let avatar = document.createElement('img')
		avatar.src = user.avatar
		avatar.width = '100'

		nombre.innerHTML = user.first_name + " " + user.last_name
		div_janet.appendChild(nombre)
		div_janet.appendChild(avatar)
		document.querySelector("#janet .loading").style.display = 'none'
		}
