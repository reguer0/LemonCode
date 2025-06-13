/**
 *El objetivo de este ejercicio es crear una máquina tragaperras
  utilizando clases donde cada vez que juguemos insertemos una moneda. 
  Cada máquina tragaperras (instancia) tendrá un contador de monedas 
  que automáticamente se irá incrementando conforme vayamos jugando.

Cuando se llame al método play el número de monedas se debe incrementar de forma automática 
y debe generar tres booleanos aleatorios que representarán el estado de las 3 ruletas. 
El usuario habrá ganado en caso de que los tres booleanos sean true, y por tanto deberá mostrarse por consola el mensaje:
 */


class SlotMachine{
    coins:number

    constructor() {
        this.coins = 0;
    }

    play() {
        this.coins++;
        const reel1 = Math.random() < 0.5;
        const reel2 = Math.random() < 0.5;
        const reel3 = Math.random() < 0.5;

        if (reel1 && reel2 && reel3) {
            console.log(` Has ganado  ${this.coins} monedas.`);
            this.coins = 0; // Reset coins after winning
        } else {
            console.log("Sigue intentándolo");
        }
    }
}

const slotMachine = new SlotMachine();
slotMachine.play();
slotMachine.play();
slotMachine.play();
slotMachine.play();
slotMachine.play();