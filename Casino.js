"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Casino = void 0;
var CongoCash_1 = require("./CongoCash");
var JokerJewels_1 = require("./JokerJewels");
var Dados_1 = require("./Dados");
var Ruleta_1 = require("./Ruleta");
var Sesion_1 = require("./Sesion");
var Casino = /** @class */ (function () {
    function Casino() {
        this.juegos = [];
        this.sesion = new Sesion_1.Sesion();
        this.agregarJuego(new CongoCash_1.CongoCash(this.sesion));
        this.agregarJuego(new JokerJewels_1.JokersJewels(this.sesion));
        this.agregarJuego(new Ruleta_1.Ruleta(this.sesion));
        this.agregarJuego(new Dados_1.Dados(this.sesion));
    }
    Casino.prototype.agregarJuego = function (juego) {
        this.juegos.push(juego);
    };
    Casino.prototype.mostrarJuegos = function () {
        console.log("--- JUEGOS DISPONIBLES ---");
        this.juegos.forEach(function (juego, index) {
            console.log("".concat(index + 1, ". ").concat(juego.getNombre()));
        });
    };
    Casino.prototype.mostrarTragamonedas = function () {
        console.log("--- TRAGAMONEDAS DISPONIBLES ---");
        this.juegos
            .filter(function (juego) { return juego instanceof JokerJewels_1.JokersJewels || juego instanceof CongoCash_1.CongoCash; })
            .forEach(function (juego, index) {
            console.log("".concat(index + 1, ". ").concat(juego.getNombre()));
        });
    };
    Casino.prototype.elegirJuego = function (numJuego) {
        if (numJuego > 0 && numJuego <= this.juegos.length) {
            return this.juegos[numJuego - 1];
        }
        console.log("Número de juego inválido.");
        return null;
    };
    Casino.prototype.jugarJuego = function (juego, apuesta) {
        if (apuesta <= 0 || isNaN(apuesta)) {
            console.log("La apuesta debe ser un número positivo.");
            return;
        }
        console.log(juego.jugar(apuesta));
    };
    return Casino;
}());
exports.Casino = Casino;
