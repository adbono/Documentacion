'use strict'

//Java Script Objet Notation
// creacion de objetos (array asociativos)

var pelicula = {
	titulo: "Batman vs Superman",
	year: 2017,
	pais: "EEUU"
}

var peliculas = [
	{titulo: "La verdad duele", year: 2016, pais: "Francia"},
	pelicula
]

var caja_peliculas = document.querySelector("#peliculas")

for(var i in peliculas){
	var p = document.createElement("p")
	p.append(peliculas[i].titulo + " - Año: " + peliculas[i].year)
	caja_peliculas.append(p)
}