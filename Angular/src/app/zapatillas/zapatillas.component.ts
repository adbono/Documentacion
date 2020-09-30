import { Component } from "@angular/core";
import { Zapatilla } from "../models/Zapatilla";


@Component({
    selector: "zapatillas",
    templateUrl: "./zapatillas.component.html"
})

export class ZapatillasComponent {
    public titulo: string = "Componente de zapatillas"
    public zapatillas: Array<Zapatilla>;

    constructor(){
        this.zapatillas = [
            new Zapatilla("Reebok Classic","Reebok","Blanco",80,true),
            new Zapatilla("Nike Runner MD","Nike","Negra",140,true),
            new Zapatilla("Adidas Classic","Adidas","Rojo",150,true),
            new Zapatilla("Nike Airmax","Nike","Azul",190,true)
        ]
        console.log(this.zapatillas)
    }




}