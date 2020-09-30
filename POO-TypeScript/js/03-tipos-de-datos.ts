// STRING
let cadena: string = "Hola esto es un string"
console.log(cadena)

// NUMBER
let numero: number = 1278475
console.log(numero)

//BOOLEAN
let verdadero: boolean = true
console.log(verdadero)

//ANY
let cualquier: any = "hola"
console.log(cualquier)
cualquier = 1
console.log(cualquier)
cualquier = false
console.log(cualquier)

//ARRAYS
let lenguajes: Array<String> = ["PHP","Java","C++","CSS","JavaScript"]
console.log(lenguajes)

// -> otra forma de definir el array
let years: number[] = [2002,2003,2004,2005,2006,2007]
console.log(years)

//DEFINO DOS TIPOS DE DATOS PARA UNA VARIABLE
let dosTiposDeVariables: string|number = "Hola"
console.log(dosTiposDeVariables)
dosTiposDeVariables = 1
console.log(dosTiposDeVariables)

//CREAR UN TIPO DE DATO
type alfanumerico = string | number
let variable1: alfanumerico = "bla bla bla"
console.log(variable1)

//VAR O LET
/**
 * LET es para bloque, VAR es global
**/
