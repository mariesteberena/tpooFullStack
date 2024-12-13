"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Juego = void 0;
var fs = require("fs");
var Juego = /** @class */ (function () {
    function Juego(nombre, valorMinimoApuesta, instruccionesPath) {
        this.nombre = nombre;
        this.valorMinimoApuesta = valorMinimoApuesta;
        this.instruccionesPath = instruccionesPath;
    }
    Juego.prototype.getNombre = function () {
        return this.nombre;
    };
    Juego.prototype.getValorMinimoApuesta = function () {
        return this.valorMinimoApuesta;
    };
    Juego.prototype.leerInstrucciones = function () {
        try {
            return fs.readFileSync(this.instruccionesPath, 'utf-8');
        }
        catch (_a) {
            return "No se pudieron cargar las instrucciones.";
        }
    };
    return Juego;
}());
exports.Juego = Juego;
