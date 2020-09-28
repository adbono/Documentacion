'use strict'

getBOM()

function getBOM(){
	console.log(window.innerHeight + " x " + window.innerWidth)
	console.log(screen.height + " x " + screen.width)
	console.log(window.location)
	console.log(window.location.href)
}

function redirect(url){
	window.location.href = url
}

function abrirVentana(url){
	//window.open(url)
	window.open(url,"","width=400,height=300")
}