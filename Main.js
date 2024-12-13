"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Casino_1 = require("./Casino");
var inquirer_1 = require("inquirer");
var casino = new Casino_1.Casino();
function mostrarMenu() {
    return __awaiter(this, void 0, void 0, function () {
        var opcionesMenu, respuesta, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    opcionesMenu = [
                        { name: "1. Mostrar juegos disponibles", value: "1" },
                        { name: "2. Leer instrucciones de un juego", value: "2" },
                        { name: "3. Jugar un juego", value: "3" },
                        { name: "4. Salir", value: "4" },
                    ];
                    return [4 /*yield*/, inquirer_1.default.prompt({
                            type: "list",
                            name: "opcion",
                            message: "Seleccione una opción:",
                            choices: opcionesMenu,
                        })];
                case 1:
                    respuesta = _b.sent();
                    _a = respuesta.opcion;
                    switch (_a) {
                        case "1": return [3 /*break*/, 2];
                        case "2": return [3 /*break*/, 4];
                        case "3": return [3 /*break*/, 6];
                        case "4": return [3 /*break*/, 8];
                    }
                    return [3 /*break*/, 9];
                case 2: return [4 /*yield*/, mostrarJuegos()];
                case 3:
                    _b.sent();
                    return [3 /*break*/, 11];
                case 4: return [4 /*yield*/, leerInstrucciones()];
                case 5:
                    _b.sent();
                    return [3 /*break*/, 11];
                case 6: return [4 /*yield*/, elegirJuego()];
                case 7:
                    _b.sent();
                    return [3 /*break*/, 11];
                case 8:
                    console.log("¡Gracias por visitar el casino!");
                    return [3 /*break*/, 11];
                case 9:
                    console.log("Opción inválida. Intente nuevamente.");
                    return [4 /*yield*/, mostrarMenu()];
                case 10:
                    _b.sent();
                    return [3 /*break*/, 11];
                case 11: return [2 /*return*/];
            }
        });
    });
}
function mostrarJuegos() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    casino.mostrarJuegos();
                    return [4 /*yield*/, mostrarMenu()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function leerInstrucciones() {
    return __awaiter(this, void 0, void 0, function () {
        var respuesta, juego;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    casino.mostrarJuegos();
                    return [4 /*yield*/, inquirer_1.default.prompt({
                            type: "input",
                            name: "numJuego",
                            message: "Ingrese el número del juego para leer las instrucciones:",
                            validate: function (input) {
                                return !isNaN(parseInt(input)) || "Debe ingresar un número válido.";
                            },
                        })];
                case 1:
                    respuesta = _a.sent();
                    juego = casino.elegirJuego(parseInt(respuesta.numJuego));
                    if (juego) {
                        console.log("\n--- INSTRUCCIONES ---");
                        console.log(juego.leerInstrucciones());
                    }
                    else {
                        console.log("Número de juego inválido.");
                    }
                    return [4 /*yield*/, mostrarMenu()];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function elegirJuego() {
    return __awaiter(this, void 0, void 0, function () {
        var opcionesJuego, respuesta, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    opcionesJuego = [
                        { name: "1. Jugar Tragamonedas", value: "1" },
                        { name: "2. Jugar Ruleta", value: "2" },
                        { name: "3. Jugar Dados", value: "3" },
                        { name: "4. Volver al menú principal", value: "4" },
                    ];
                    return [4 /*yield*/, inquirer_1.default.prompt({
                            type: "list",
                            name: "opcion",
                            message: "Seleccione el tipo de juego:",
                            choices: opcionesJuego,
                        })];
                case 1:
                    respuesta = _b.sent();
                    _a = respuesta.opcion;
                    switch (_a) {
                        case "1": return [3 /*break*/, 2];
                        case "2": return [3 /*break*/, 4];
                        case "3": return [3 /*break*/, 6];
                        case "4": return [3 /*break*/, 8];
                    }
                    return [3 /*break*/, 10];
                case 2: return [4 /*yield*/, jugarTragamonedas()];
                case 3:
                    _b.sent();
                    return [3 /*break*/, 12];
                case 4: return [4 /*yield*/, jugarRuleta()];
                case 5:
                    _b.sent();
                    return [3 /*break*/, 12];
                case 6: return [4 /*yield*/, jugarDados()];
                case 7:
                    _b.sent();
                    return [3 /*break*/, 12];
                case 8: return [4 /*yield*/, mostrarMenu()];
                case 9:
                    _b.sent();
                    return [3 /*break*/, 12];
                case 10:
                    console.log("Opción inválida. Intente nuevamente.");
                    return [4 /*yield*/, elegirJuego()];
                case 11:
                    _b.sent();
                    return [3 /*break*/, 12];
                case 12: return [2 /*return*/];
            }
        });
    });
}
function jugarTragamonedas() {
    return __awaiter(this, void 0, void 0, function () {
        var numJuego, juego, apuesta, resultado, opcionFinal;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("\n--- JUGAR TRAGAMONEDAS ---");
                    casino.mostrarTragamonedas();
                    return [4 /*yield*/, inquirer_1.default.prompt({
                            type: "input",
                            name: "numJuego",
                            message: "Ingrese el número de la tragamonedas que desea jugar:",
                            validate: function (input) {
                                return !isNaN(parseInt(input)) || "Debe ingresar un número válido.";
                            },
                        })];
                case 1:
                    numJuego = (_a.sent()).numJuego;
                    juego = casino.elegirJuego(parseInt(numJuego));
                    if (!!juego) return [3 /*break*/, 3];
                    console.log("Número de tragamonedas inválido. Inténtelo de nuevo.");
                    return [4 /*yield*/, elegirJuego()];
                case 2: return [2 /*return*/, _a.sent()];
                case 3: return [4 /*yield*/, inquirer_1.default.prompt({
                        type: "input",
                        name: "apuesta",
                        message: "Ingrese su apuesta (m\u00EDnimo ".concat(juego.getValorMinimoApuesta(), "):"),
                        validate: function (input) {
                            var apuestaNum = parseFloat(input);
                            if (isNaN(apuestaNum) || apuestaNum < juego.getValorMinimoApuesta()) {
                                return "La apuesta debe ser al menos ".concat(juego.getValorMinimoApuesta(), ".");
                            }
                            return true;
                        },
                    })];
                case 4:
                    apuesta = (_a.sent()).apuesta;
                    resultado = casino.jugarJuego(juego, parseFloat(apuesta));
                    console.log(resultado);
                    return [4 /*yield*/, inquirer_1.default.prompt({
                            type: "list",
                            name: "opcionFinal",
                            message: "¿Qué desea hacer a continuación?",
                            choices: [
                                { name: "Volver a jugar", value: "1" },
                                { name: "Volver al menú principal", value: "2" }
                            ],
                        })];
                case 5:
                    opcionFinal = (_a.sent()).opcionFinal;
                    if (!(opcionFinal === "1")) return [3 /*break*/, 7];
                    return [4 /*yield*/, jugarTragamonedas()];
                case 6:
                    _a.sent();
                    return [3 /*break*/, 9];
                case 7: return [4 /*yield*/, mostrarMenu()];
                case 8:
                    _a.sent();
                    _a.label = 9;
                case 9: return [2 /*return*/];
            }
        });
    });
}
function jugarRuleta() {
    return __awaiter(this, void 0, void 0, function () {
        var juego, apuesta, apuestaInput, eleccion, resultado, opcionFinal;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("\n--- JUGAR RULETA ---");
                    juego = casino.elegirJuego(3);
                    if (!!juego) return [3 /*break*/, 2];
                    console.log("Ocurrió un error al seleccionar la ruleta.");
                    return [4 /*yield*/, elegirJuego()];
                case 1: return [2 /*return*/, _a.sent()];
                case 2:
                    if (!true) return [3 /*break*/, 4];
                    return [4 /*yield*/, inquirer_1.default.prompt({
                            type: "input",
                            name: "apuestaInput",
                            message: "Ingrese su apuesta (m\u00EDnimo ".concat(juego.getValorMinimoApuesta(), "):"),
                            validate: function (input) {
                                var cleanedInput = input.replace(/[^0-9]/g, '');
                                var apuestaNum = parseInt(cleanedInput, 10);
                                if (isNaN(apuestaNum) || apuestaNum < juego.getValorMinimoApuesta()) {
                                    return "La apuesta debe ser un n\u00FAmero entero positivo y al menos ".concat(juego.getValorMinimoApuesta(), ".");
                                }
                                return true;
                            },
                        })];
                case 3:
                    apuestaInput = (_a.sent()).apuestaInput;
                    apuesta = parseInt(apuestaInput.replace(/[^0-9]/g, ''), 10);
                    if (apuesta >= juego.getValorMinimoApuesta()) {
                        return [3 /*break*/, 4];
                    }
                    return [3 /*break*/, 2];
                case 4: return [4 /*yield*/, inquirer_1.default.prompt({
                        type: "input",
                        name: "eleccion",
                        message: "Ingrese su predicción (número y color, separados por un espacio, ej. 5 rojo):",
                        validate: function (input) {
                            var partes = input.trim().toLowerCase().split(" ");
                            if (partes.length < 2) {
                                return "Por favor, ingresa un número y un color separados por un espacio.";
                            }
                            var numero = partes[0].replace(/[^0-9]/g, '');
                            var color = partes[1];
                            if (!numero || isNaN(parseInt(numero, 10)) || parseInt(numero, 10) < 0 || parseInt(numero, 10) > 36) {
                                return "El número debe estar entre 0 y 36, sin comas ni puntos.";
                            }
                            if (color !== "rojo" && color !== "negro") {
                                return "El color debe ser 'rojo' o 'negro'.";
                            }
                            return true;
                        },
                    })];
                case 5:
                    eleccion = (_a.sent()).eleccion;
                    resultado = juego.jugar(apuesta, eleccion);
                    console.log(resultado);
                    return [4 /*yield*/, inquirer_1.default.prompt({
                            type: "list",
                            name: "opcionFinal",
                            message: "¿Qué desea hacer a continuación?",
                            choices: [
                                { name: "Volver a jugar", value: "1" },
                                { name: "Volver al menú principal", value: "2" }
                            ],
                        })];
                case 6:
                    opcionFinal = (_a.sent()).opcionFinal;
                    if (!(opcionFinal === "1")) return [3 /*break*/, 8];
                    return [4 /*yield*/, jugarRuleta()];
                case 7:
                    _a.sent();
                    return [3 /*break*/, 10];
                case 8: return [4 /*yield*/, mostrarMenu()];
                case 9:
                    _a.sent();
                    _a.label = 10;
                case 10: return [2 /*return*/];
            }
        });
    });
}
function jugarDados() {
    return __awaiter(this, void 0, void 0, function () {
        var juego, apuesta, prediccion, resultado, opcionFinal;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("--- JUGAR DADOS ---");
                    juego = casino.elegirJuego(4);
                    if (!!juego) return [3 /*break*/, 2];
                    console.log("Ocurrió un error al seleccionar los dados.");
                    return [4 /*yield*/, elegirJuego()];
                case 1: return [2 /*return*/, _a.sent()];
                case 2: return [4 /*yield*/, inquirer_1.default.prompt({
                        type: "input",
                        name: "apuesta",
                        message: "Ingrese su apuesta (m\u00EDnimo ".concat(juego.getValorMinimoApuesta(), "):"),
                        validate: function (input) {
                            var apuestaNum = parseFloat(input);
                            return (!isNaN(apuestaNum) && apuestaNum >= juego.getValorMinimoApuesta()) || "La apuesta debe ser al menos ".concat(juego.getValorMinimoApuesta(), ".");
                        },
                    })];
                case 3:
                    apuesta = (_a.sent()).apuesta;
                    return [4 /*yield*/, inquirer_1.default.prompt({
                            type: "input",
                            name: "prediccion",
                            message: "Ingrese su predicción de la suma de los dos dados (de 2 a 12):",
                            validate: function (input) {
                                var value = Number(input);
                                return (Number.isInteger(value) && value >= 2 && value <= 12) || "La predicción debe estar entre 2 y 12.";
                            },
                        })];
                case 4:
                    prediccion = (_a.sent()).prediccion;
                    resultado = juego.jugar(parseFloat(apuesta), prediccion.trim());
                    console.log(resultado);
                    return [4 /*yield*/, inquirer_1.default.prompt({
                            type: "list",
                            name: "opcionFinal",
                            message: "¿Qué desea hacer a continuación?",
                            choices: [
                                { name: "Volver a jugar", value: "1" },
                                { name: "Volver al menú principal", value: "2" }
                            ],
                        })];
                case 5:
                    opcionFinal = (_a.sent()).opcionFinal;
                    if (!(opcionFinal === "1")) return [3 /*break*/, 7];
                    return [4 /*yield*/, jugarDados()];
                case 6:
                    _a.sent();
                    return [3 /*break*/, 9];
                case 7: return [4 /*yield*/, mostrarMenu()];
                case 8:
                    _a.sent();
                    _a.label = 9;
                case 9: return [2 /*return*/];
            }
        });
    });
}
mostrarMenu();
