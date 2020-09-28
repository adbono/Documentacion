'use strict'
/* pruebar con let y var */


/* prueba con var*/
var numero = 40
console.log(numero)
if (true) {
	numero = 50
	console.log(numero)
}

console.log(numero)

/* prueba con let*/
let texto = "Curso JS"
console.log(texto) //curso js

if (true) {
	let texto = "Curso Laravel5"
	console.log(texto) //curso laravel
}

console.log(texto) //curso js

