"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.JokersJewels = void 0;
var Tragamonedas_1 = require("./Tragamonedas");
var readlineSync = require("readline-sync");
var JokersJewels = /** @class */ (function (_super) {
    __extends(JokersJewels, _super);
    function JokersJewels(sesion) {
        return _super.call(this, "Jokers Jewels", 20, "./instrucciones/JokersJewels.txt", "Elección de Color") || this;
    }
    JokersJewels.prototype.aplicarBono = function (sesion) {
        var colores = ["rojo", "verde", "azul"];
        var colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
        var colorElegido = readlineSync.question("Elige un color (rojo, verde, azul): ").toLowerCase();
        if (colorElegido === colorAleatorio) {
            var bono = 300 * (Math.floor(Math.random() * 4) + 5);
            sesion.agregarSaldo(bono);
            console.log("\u00A1Acertaste el color! Ganaste un bono de ".concat(bono, ". Saldo actual: ").concat(sesion.getSaldoTotal()));
            return "¡GANASTE EL BONO!";
        }
        else {
            console.log("No acertaste el color. Color correcto: ".concat(colorAleatorio, ". Saldo actual: ").concat(sesion.getSaldoTotal()));
            return "No acertaste el bono.";
        }
    };
    return JokersJewels;
}(Tragamonedas_1.Tragamonedas));
exports.JokersJewels = JokersJewels;
