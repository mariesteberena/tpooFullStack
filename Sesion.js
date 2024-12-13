"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sesion = void 0;
var bienvenida = 1000;
var Sesion = /** @class */ (function () {
    //tambien se podria usar la misma clase para chequear el jugador, etc
    function Sesion() {
        this.saldoTotal = bienvenida;
    }
    Sesion.prototype.agregarSaldo = function (valor) {
        this.saldoTotal += valor;
    };
    Sesion.prototype.descontarSaldo = function (valor) {
        this.saldoTotal -= valor;
    };
    Sesion.prototype.getSaldoTotal = function () {
        return this.saldoTotal;
    };
    return Sesion;
}());
exports.Sesion = Sesion;
