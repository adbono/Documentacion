import { Component, OnInit, DoCheck, OnDestroy} from "@angular/core";

@Component({
    selector: "videojuego", //nombre del componente
    templateUrl: "./videojuego.component.html"
})

export class VideojuegoComponent implements DoCheck ,OnInit, OnDestroy{
    
    public titulo: string;
    public listado: string;

    constructor(){
        this.titulo = "Componente de videojuegos"
        this.listado = "Listado de los jueguitos mas papulares"
        console.log("Se cargo el componente VideoJuego")
    }

    ngOnInit(){
        console.log("ejecutado OnInit")
    }

    ngDoCheck(){
        console.log("El docheck salta cuando se produce un cambio en el componente")
    }

    cambiarTitulo(){
        this.titulo = "Nuevo titulo"
    }

    ngOnDestroy(){
        //se ejecute algo antes de eliminar un componente
        console.log("Destroy ejecutado")
    }

}