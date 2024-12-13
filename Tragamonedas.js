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
exports.Tragamonedas = void 0;
var Juego_1 = require("./Juego");
var Tragamonedas = /** @class */ (function (_super) {
    __extends(Tragamonedas, _super);
    function Tragamonedas(nombre, valorMinimoApuesta, instruccionesPath, tipoBono) {
        var _this = _super.call(this, nombre, valorMinimoApuesta, instruccionesPath) || this;
        _this.tipoBono = tipoBono;
        return _this;
    }
    Tragamonedas.prototype.getTipoBono = function () {
        return this.tipoBono;
    };
    Tragamonedas.prototype.jugar = function (apuesta, sesion) {
        if (apuesta < this.valorMinimoApuesta) {
            return "La apuesta es menor al valor mínimo permitido.";
        }
        if (sesion.getSaldoTotal() < apuesta) {
            return "Saldo insuficiente.";
        }
        var ganancia = 0;
        var multiplicador = Math.floor(Math.random() * 5) + 1;
        ganancia = apuesta * multiplicador;
        sesion.agregarSaldo(ganancia);
        console.log("Resultado: Ganaste ".concat(ganancia, ". Saldo actual: ").concat(sesion.getSaldoTotal(), "."));
        if (ganancia >= 300) {
            console.log("¡Felicidades! Activaste el bono.");
            return this.aplicarBono(sesion);
        }
        return "Resultado: Ganaste ".concat(ganancia, ". Saldo actual: ").concat(sesion.getSaldoTotal(), ".");
    };
    return Tragamonedas;
}(Juego_1.Juego));
exports.Tragamonedas = Tragamonedas;
