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
exports.Ruleta = void 0;
var Juego_1 = require("./Juego");
var Ruleta = /** @class */ (function (_super) {
    __extends(Ruleta, _super);
    function Ruleta(sesion) {
        var _this = _super.call(this, "Ruleta", 100, './instrucciones/Ruleta.txt') || this;
        _this.sesion = sesion;
        _this.totalGanado = 0;
        return _this;
    }
    Ruleta.prototype.getTotalGanado = function () {
        return this.totalGanado;
    };
    Ruleta.prototype.jugar = function (apuesta, eleccion) {
        if (!Number.isInteger(apuesta)) {
            return "La apuesta debe ser un número entero positivo.";
        }
        if (apuesta < this.valorMinimoApuesta) {
            return "La apuesta es menor al valor mínimo permitido.";
        }
        var numeros = Array.from({ length: 37 }, function (_, i) { return i; });
        var colores = ["rojo", "negro"];
        var numeroGanador = numeros[Math.floor(Math.random() * numeros.length)];
        var colorGanador = colores[Math.floor(Math.random() * colores.length)];
        console.log("N\u00FAmero ganador: ".concat(numeroGanador, ", Color ganador: ").concat(colorGanador));
        var partes = eleccion.split(" ").map(function (p) { return p.trim().toLowerCase(); });
        if (partes.length < 2) {
            return "Por favor, ingresa un número y un color separados por un espacio.";
        }
        var numeroElegido = parseInt(partes[0], 10);
        var colorElegido = partes[1];
        if (isNaN(numeroElegido) ||
            !Number.isInteger(numeroElegido) ||
            numeroElegido < 0 ||
            numeroElegido > 36) {
            return "El número ingresado no es válido. Debe ser un número entero entre 0 y 36.";
        }
        if (!colores.includes(colorElegido)) {
            return "El color ingresado no es válido. Debe ser 'rojo' o 'negro'.";
        }
        var ganancia = 0;
        if (numeroElegido === numeroGanador && colorElegido === colorGanador) {
            ganancia = (apuesta * 35) + (apuesta * 2);
        }
        else if (numeroElegido === numeroGanador) {
            ganancia = apuesta * 35;
        }
        else if (colorElegido === colorGanador) {
            ganancia = apuesta * 2;
        }
        if (ganancia > 0) {
            this.totalGanado += ganancia - apuesta;
            this.sesion.agregarSaldo(ganancia - apuesta);
            return "\u00A1Felicidades! Ganaste ".concat(ganancia, ". Total acumulado: ").concat(this.sesion.getSaldoTotal(), ".");
        }
        else {
            this.totalGanado -= apuesta;
            this.sesion.descontarSaldo(apuesta);
            return "Lo siento, no ganaste esta vez. Total acumulado: ".concat(this.sesion.getSaldoTotal(), ".");
        }
    };
    return Ruleta;
}(Juego_1.Juego));
exports.Ruleta = Ruleta;
