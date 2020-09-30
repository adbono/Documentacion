//INTERFACES

interface CamisetaBase{
    setColor(color)
    getColor()
}

//CLASE
class Camiseta implements CamisetaBase{

    private color: string
    private modelo: string
    private marca: string
    private talle: string
    private precio: number

    constructor(color, modelo, marca, talle, precio) {
        this.color = color
        this.marca = marca
        this.modelo = modelo
        this.talle = talle
        this.precio = precio
    }

    public getColor() : string {
        return this.color
    }
    public getModelo() : string {
        return this.modelo
    }
 
    
    public setColor(v : string) {
        this.color = v;
    }
    public setModelo(v : string) {
        this.modelo = v;
    }

}

//CLASE HIJA

class Sudadera extends Camiseta{
    private capucha: boolean
    
    setCapucha(capucha:boolean){
        this.capucha = capucha
    }

    getCapucha():boolean{
        return this.capucha
    }
}

var camiseta = new Camiseta("adad","asas","asasa","assa",11)
console.log(camiseta)

var sudadera = new Sudadera("colro","marca","modelo","talla",11)
sudadera.setCapucha(true)
sudadera.setColor("verde claro")
console.log(sudadera)