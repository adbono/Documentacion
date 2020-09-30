'use strict'

/**
 *  CREAR UN OBJETO JSON
**/

var bicileta = {
    color: "rojo",
    modelo: "BMX",
    frenos: "disco",
    velocidadMaxima: "60 km/h",
    cambiarColor: function (nuevoColor) {
        this.color = nuevoColor
    }
}

bicileta.cambiarColor("verde")

