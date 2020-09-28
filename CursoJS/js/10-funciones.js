'use strict'

/** Funciones **/

calculadora()

calculadora_con_parametros(3,3)

calculadora_con_parametros_opcionales(6)

/***************************/

function calculadora(){
	console.log("Hola soy la calculadora")
}

function calculadora_con_parametros(nro1, nro2){
	console.log(nro1 + nro2)
}

function calculadora_con_parametros_opcionales(nro1 = 1, nro2 = 2){
	console.log(nro1 + nro2)
}
