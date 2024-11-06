import { Actor } from "../actor";
import { Engine } from "../engine";

export class Background extends Actor {
    constructor() {
        super(0, 0, 0, 0);
    }

    tick(engine: Engine) {
        this.width = engine.canvasElement.width;
        this.height = engine.canvasElement.height;

        const gradient = engine.canvas.createLinearGradient(0, 0, 0, this.height);
        
        gradient.addColorStop(0, '#00A1FF');
        gradient.addColorStop(0.4, '#3BB7FF');
        gradient.addColorStop(1, '#BAE8FF');

        engine.canvas.fillStyle = gradient;
        engine.canvas.fillRect(0, 0, this.width, this.height);

        return true;
    }
}