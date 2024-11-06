import { Actor } from "../actor";
import { Engine } from "../engine";

export class Basket extends Actor {
    constructor() {
        super(20, 0, 240, 20);
    }

    public tick(engine: Engine) {
        this.x = engine.mouseX - this.width / 2;
        this.y = engine.canvasElement.height - 20 - this.height;

        engine.canvas.fillStyle = "black";
        engine.canvas.fillRect(this.x, this.y, this.width, this.height);

        return true;
    }
}