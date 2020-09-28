'use strict'

var pelicula = function(nombre){
	return "La pelicula es: " + nombre
}

console.log(pelicula("Ariel"))

/** FUNCION ANONIMA **/

function sumame(numero1, numero2, sumaYmuestra, sumaPorDos){
	var sumar = numero1 + numero2
	sumaYmuestra(sumar)
	sumaPorDos(sumar)
}


sumame(5, 7, function(dato){
	console.log("La suma es:", dato)
},
function(dato){
	console.log("La suma por dos es:", dato*2)
})

/** FUNCION FLECHA **/

sumame(8, 2, (dato) => {
	console.log("La suma es:", dato)
},
(dato) => {
	console.log("La suma por dos es:", dato*2)
})