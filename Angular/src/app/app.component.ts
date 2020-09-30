import { Component } from '@angular/core';
import { Configuracion } from "./models/configuracion";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public title = 'Angular con ADB';
  public mostrar_videojuegos: boolean = true;
  public config;

  constructor(){
    this.config = Configuracion
    this.title = Configuracion.titulo
  }

  ocultarVideoJuegos(value){
    this.mostrar_videojuegos = value
  }
}
