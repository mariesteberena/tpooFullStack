import { Juego } from "./Juego"; 
import { Sesion } from "./Sesion";

export abstract class Tragamonedas extends Juego {
    protected tipoBono: string;

    constructor(nombre: string, valorMinimoApuesta: number, instruccionesPath: string, tipoBono: string) {
        super(nombre, valorMinimoApuesta, instruccionesPath);
        this.tipoBono = tipoBono;
    }

    getTipoBono(): string {
        return this.tipoBono;
    }

    abstract aplicarBono(sesion: Sesion): string; 

    jugar(apuesta: number, sesion: Sesion): string {
        if (apuesta < this.valorMinimoApuesta) {
            return "La apuesta es menor al valor mínimo permitido.";
        }

        if (sesion.getSaldoTotal() < apuesta) {
            return "Saldo insuficiente.";
        }

        let ganancia = 0;
        const multiplicador = Math.floor(Math.random() * 5) + 1; 
        ganancia = apuesta * multiplicador;
        sesion.agregarSaldo(ganancia);

        console.log(`Resultado: Ganaste ${ganancia}. Saldo actual: ${sesion.getSaldoTotal()}.`);

        if (ganancia >= 300) {
            console.log("¡Felicidades! Activaste el bono.");
            return this.aplicarBono(sesion);
        }

        return `Resultado: Ganaste ${ganancia}. Saldo actual: ${sesion.getSaldoTotal()}.`;
    }
}
