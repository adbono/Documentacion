'use strict'

/** Plantillas de texto **/

var nombre = prompt("Ingrese nombre")
var apellido = prompt("Ingrese appelido")

//var texto = "Mi nombre es "+nombre+" , mi apellido es "+apellido
var texto = `
	<h1> Hola que tal </h1>
	<h3> Mi nombre es: ${nombre} </h3>
	<h3> Mi apellido es: ${apellido} </h3>
`
document.write(texto)