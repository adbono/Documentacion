import { Component, OnInit} from "@angular/core";
import { Zapatilla } from "../models/Zapatilla";


@Component({
    selector: "zapatillas",
    templateUrl: "./zapatillas.component.html"
})

export class ZapatillasComponent implements OnInit{
    public titulo: string = "Componente de zapatillas"
    public zapatillas: Array<Zapatilla>;
    public marcas: string[];
    public color: string;
    public miMarca: string;

    constructor(){
        this.miMarca = "Fila"
        this.marcas = new Array();
        this.color = "yellow";
        this.zapatillas = [
            new Zapatilla("Reebok Classic","Reebok","Blanco",80,true),
            new Zapatilla("Nike Runner MD","Nike","Negra",40,true),
            new Zapatilla("Adidas Classic","Adidas","Rojo",50,true),
            new Zapatilla("Nike Airmax","Nike","Azul",190,false),
            new Zapatilla("Nike Airmax 2","Nike","gris",180,true),
            new Zapatilla("Reebok Classic 2","Reebok","Blanco",70,true)
        ]
        console.log(this.zapatillas)
    }

    ngOnInit(){
        this.recorreMarcas()
        console.log(this.marcas)
    }


    recorreMarcas(){
        this.zapatillas.forEach(zapa => {
            if(this.marcas.indexOf(zapa.marca) < 0){
                this.marcas.push(zapa.marca)
            }
        });
    }

    getMarca(){
        alert(this.miMarca)
    }

    addMarca(){
        this.marcas.push(this.miMarca)
    }

    borrarMarca(i){
        //delete this.marcas[i]
        this.marcas.splice(i, 1)
    }

    onBlur(){
        console.log("saliste del input")
    }

    mostrarPalabra(){
        alert(this.miMarca)
    }

}