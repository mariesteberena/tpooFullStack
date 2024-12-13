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
exports.Dados = void 0;
var Juego_1 = require("./Juego");
var Dados = /** @class */ (function (_super) {
    __extends(Dados, _super);
    function Dados(sesion) {
        var _this = _super.call(this, "Dados", 50, './instrucciones/Dados.txt') || this;
        _this.sesion = sesion;
        _this.totalGanado = 0;
        return _this;
    }
    Dados.prototype.getTotalGanado = function () {
        return this.totalGanado;
    };
    Dados.prototype.jugar = function (apuesta, prediccion) {
        var dado1 = Math.ceil(Math.random() * 6);
        var dado2 = Math.ceil(Math.random() * 6);
        var suma = dado1 + dado2;
        var ganancia = 0;
        if (prediccion === suma.toString()) {
            ganancia = apuesta * 2;
            this.totalGanado += ganancia;
            this.sesion.agregarSaldo(ganancia);
            return "\u00A1Ganaste! Los dados salieron ".concat(dado1, " y ").concat(dado2, " (Suma: ").concat(suma, "). Ganaste ").concat(ganancia, ".");
        }
        else {
            this.totalGanado -= apuesta;
            this.sesion.descontarSaldo(apuesta);
            return "Perdiste. Los dados salieron ".concat(dado1, " y ").concat(dado2, " (Suma: ").concat(suma, ").");
        }
    };
    return Dados;
}(Juego_1.Juego));
exports.Dados = Dados;
