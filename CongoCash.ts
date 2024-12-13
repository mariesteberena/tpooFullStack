import { Tragamonedas } from "./Tragamonedas";
import { Sesion } from "./Sesion";

export class CongoCash extends Tragamonedas {
    private tiradasGratis: number = 0;

    constructor(sesion: Sesion) {
        super("Congo Cash", 10, "./instrucciones/CongoCash.txt", "Tiradas Gratis");
    }

    aplicarBono(sesion: Sesion): string {
        this.tiradasGratis += 5; 
        console.log("¡Ganaste 5 tiradas gratis!");
        return "¡Ganaste 5 tiradas gratis!";
    }

    jugar(apuesta: number, sesion: Sesion): string {
        if (apuesta < this.valorMinimoApuesta && this.tiradasGratis <= 0) {
            return "La apuesta es menor al valor mínimo permitido y no tienes tiradas gratis.";
        }

        let ganancia = 0;

        if (this.tiradasGratis > 0) {
            console.log("Usando una tirada gratis...");
            this.tiradasGratis--; 
        } else {
            ganancia -= apuesta; 
        }

        const multiplicador = Math.floor(Math.random() * 5) + 1; 
        ganancia += apuesta * multiplicador;
        sesion.agregarSaldo(ganancia);

        if (ganancia === 300 && this.tiradasGratis === 0) {
            console.log("¡Ganaste un bono!");
            this.aplicarBono(sesion);
        }

        console.log(
            `Ganancia: ${ganancia}, Tiradas gratis restantes: ${this.tiradasGratis}, Saldo actual: ${sesion.getSaldoTotal()}`
        );

        return `Ganancia en esta jugada: ${ganancia}. Saldo actual: ${sesion.getSaldoTotal()}`;
    }
}
