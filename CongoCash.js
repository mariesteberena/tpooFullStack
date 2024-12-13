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
exports.CongoCash = void 0;
var Tragamonedas_1 = require("./Tragamonedas");
var CongoCash = /** @class */ (function (_super) {
    __extends(CongoCash, _super);
    function CongoCash(sesion) {
        var _this = _super.call(this, "Congo Cash", 10, "./instrucciones/CongoCash.txt", "Tiradas Gratis") || this;
        _this.tiradasGratis = 0;
        return _this;
    }
    CongoCash.prototype.aplicarBono = function (sesion) {
        this.tiradasGratis += 5;
        console.log("¡Ganaste 5 tiradas gratis!");
        return "¡Ganaste 5 tiradas gratis!";
    };
    CongoCash.prototype.jugar = function (apuesta, sesion) {
        if (apuesta < this.valorMinimoApuesta && this.tiradasGratis <= 0) {
            return "La apuesta es menor al valor mínimo permitido y no tienes tiradas gratis.";
        }
        var ganancia = 0;
        if (this.tiradasGratis > 0) {
            console.log("Usando una tirada gratis...");
            this.tiradasGratis--;
        }
        else {
            ganancia -= apuesta;
        }
        var multiplicador = Math.floor(Math.random() * 5) + 1;
        ganancia += apuesta * multiplicador;
        sesion.agregarSaldo(ganancia);
        if (ganancia === 300 && this.tiradasGratis === 0) {
            console.log("¡Ganaste un bono!");
            this.aplicarBono(sesion);
        }
        console.log("Ganancia: ".concat(ganancia, ", Tiradas gratis restantes: ").concat(this.tiradasGratis, ", Saldo actual: ").concat(sesion.getSaldoTotal()));
        return "Ganancia en esta jugada: ".concat(ganancia, ". Saldo actual: ").concat(sesion.getSaldoTotal());
    };
    return CongoCash;
}(Tragamonedas_1.Tragamonedas));
exports.CongoCash = CongoCash;
