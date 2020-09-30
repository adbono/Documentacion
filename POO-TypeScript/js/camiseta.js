//INTERFACES
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//CLASE
var Camiseta = /** @class */ (function () {
    function Camiseta(color, modelo, marca, talle, precio) {
        this.color = color;
        this.marca = marca;
        this.modelo = modelo;
        this.talle = talle;
        this.precio = precio;
    }
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    Camiseta.prototype.getModelo = function () {
        return this.modelo;
    };
    Camiseta.prototype.setColor = function (v) {
        this.color = v;
    };
    Camiseta.prototype.setModelo = function (v) {
        this.modelo = v;
    };
    return Camiseta;
}());
//CLASE HIJA
var Sudadera = /** @class */ (function (_super) {
    __extends(Sudadera, _super);
    function Sudadera() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sudadera.prototype.setCapucha = function (capucha) {
        this.capucha = capucha;
    };
    Sudadera.prototype.getCapucha = function () {
        return this.capucha;
    };
    return Sudadera;
}(Camiseta));
var camiseta = new Camiseta("adad", "asas", "asasa", "assa", 11);
console.log(camiseta);
var sudadera = new Sudadera("colro", "marca", "modelo", "talla", 11);
sudadera.setCapucha(true);
sudadera.setColor("verde claro");
console.log(sudadera);
