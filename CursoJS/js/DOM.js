'use strict'

//DOM Document Object Model
//Obtener elemento por ID

var caja = document.getElementById("micaja")
//consola("Obtengo el codigo del DIV del Body del Index")
//consola(caja)

caja = document.getElementById("micaja").innerHTML
//consola("Obtengo el contenido del DIV del Body del Index")
//consola(caja)

caja = document.getElementById("micaja")
//caja.innerHTML = 'Nueva Caja'
//consola("Cambio el codigo del INDEX.HTML desde JS")
/*
caja.style.background = "green"
caja.style.padding = "20px"
caja.style.color = "blue"
cambiaColor("white")

caja.className = "hola"
*/
// Otra forma
// puedo buscar por id (#micaja) o por clase (.micaja)
caja = document.querySelector("#micaja")

/*****************************************************/

//Obtener elemento por etiqueta
var todosLosDivs = document.getElementsByTagName("div")
//consola(todosLosDivs)

//textContent es igual a innerHTML es lo mismo pero no lo puedo cambiar
var texto = todosLosDivs[2].textContent
//consola(texto)

var seccion = document.querySelector("#miseccion")
var hr = document.createElement("hr")
//append / prepend

for(var i in todosLosDivs){
	//if(todosLosDivs[i].textContent.length >= 1){
	if(typeof todosLosDivs[i].textContent == "string"){	
		var parrafo = document.createElement("p")
		var texto = document.createTextNode(todosLosDivs[i].textContent)
		parrafo.append(texto)
		seccion.append(parrafo)
		seccion.append(hr)
		
	}
}

//Obtener elemento por clase

var divsRojos = document.getElementsByClassName("rojo")
consola(divsRojos)

for (var i in divsRojos){
	if (divsRojos[i].className == "rojo"){
		divsRojos[i].style.background = "red"
	}
}

var divsAmarillos = document.getElementsByClassName("amarillo")
for (var i in divsAmarillos){
	if (divsAmarillos[i].className == "amarillo"){
		divsAmarillos[i].style.background = "yellow"
	}
}

//QUERY SELECTOR ALL
//El query selector es recomendable para seleccionar un ID, al seleccionar una clase, solo selecciona la primera
//Sino puedo utilizarse el query selector ALL
var clasesRojo = document.querySelectorAll(".rojo")
consola(clasesRojo)



function consola (dato){
	console.log(dato)
}

function cambiaColor(color){
	caja.style.color = color
}
