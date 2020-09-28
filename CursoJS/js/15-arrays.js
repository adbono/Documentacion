'use strict'

// Defino array
var a_nombre = ["Ariel","Del Bono",24,true]
var a_lenguajes = new Array("PHP", "JS", "Go", "Java")

document.write("<h2>Listado de lenguajes</h2>")
document.write("<ul>")


// Recorro Array
print("Lenguajes")
a_lenguajes.forEach((elemento, indice, array) => {
	print(indice + " - " + array)
	document.write("<li>"+elemento+"</li>")
})
document.write("</ul>")

//Otra forma de recorrer 
//MEJOR!!!!!!!!!!!!!!!!!!!!
print("Otra forma de recorrer")
for(var elemento in a_lenguajes){
	print(a_lenguajes[elemento])
}

// Array multidimensional
var categorias = new Array("Accion","Terror","Comedia")
var peliculas = new Array("La verdad duele","La vida es bella","Gran Torino")
var cine = new Array(categorias, peliculas)

print("Array multidimensional")
print(cine)
print("Objeto 0,1 del array")
print(cine[0][1])

//Agregar objeto
peliculas.push("Batman") 
print("Agrego Batman al array")
print(peliculas)

//Elimina objeto
peliculas.pop()
print("Saco ultimo objeto")
print(peliculas)

// Elimino objeto especifico
// Splice(Posicion,Cantidad,Objeto)

//Borro 1 elemento de la posicion 1
print("Borro 1 elemento, desde posicion 1")
peliculas.splice(1,1) 

//Agrego Hola en la posicion 2
print("Agrego 'Hola' en la posicion 2")
peliculas.splice(2,0,"hola")

//Convertir a String separador por comas (,)
print("Convierto en String separado por comas (,)")
var peliculas_a_string = peliculas.join()
print(peliculas_a_string)

//Convierto un string con comas a Array
var cadena = "hola, chau, adios"
var cadena_array = cadena.split(",")
print("Convierto cadena separada en comas a Array -> "+cadena )
print(cadena_array)

//Ordeno Array
cadena_array.sort()
print("Ordeno array")
print(cadena_array)

//Doy vuelta array
cadena_array.reverse()
print("Doy vuelta el array")
print(cadena_array)

//Busqueda
// Find necesita una funcion como parametro
// lenguaje cuando lenguaje = PHP
print("Busqueda de palabra PHP")
print(a_lenguajes.find(lenguaje => lenguaje == "PHP"))

//Some se usa para comparaciones
var precios = new Array(1,10,13,20,22,30,40)
print("Saber si un dato en mayor a 15")
print(precios.some(precio => precio >= 13))


function print(dato){
	console.log(dato)
}