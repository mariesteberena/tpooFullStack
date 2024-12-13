import { Tragamonedas } from "./Tragamonedas";
import { Sesion } from "./Sesion";
import * as readlineSync from "readline-sync";

export class JokersJewels extends Tragamonedas {
    constructor(sesion:Sesion) {
        super("Jokers Jewels", 20, "./instrucciones/JokersJewels.txt", "Elección de Color");
    }

    aplicarBono(sesion: Sesion): string {
        const colores = ["rojo", "verde", "azul"];
        const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
        const colorElegido = readlineSync.question("Elige un color (rojo, verde, azul): ").toLowerCase();

        if (colorElegido === colorAleatorio) {
            const bono = 300 * (Math.floor(Math.random() * 4) + 5);
            sesion.agregarSaldo(bono);
            console.log(`¡Acertaste el color! Ganaste un bono de ${bono}. Saldo actual: ${sesion.getSaldoTotal()}`);
            return "¡GANASTE EL BONO!";
        } else {
            console.log(`No acertaste el color. Color correcto: ${colorAleatorio}. Saldo actual: ${sesion.getSaldoTotal()}`);
            return "No acertaste el bono.";
        }
    }
}