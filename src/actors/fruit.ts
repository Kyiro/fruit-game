import { Actor } from "../actor";
import { Engine } from "../engine";
import { randomInArray } from "../random";
import { Basket } from "./basket";
import { ScoreManager } from "./score-manager";

const fruitImages: CanvasImageSource[] = new Array(18).fill(null).map((_, idx) => {
    const element = document.createElement("img");

    element.src = `/fruits/fruit${idx + 1}.png`;

    return element;
});

console.log(fruitImages);

export class Fruit extends Actor {
    private texture: CanvasImageSource;

    constructor(x: number, y: number) {
        super(x, y, 75, 75);

        this.texture = randomInArray(fruitImages);
    }

    tick(engine: Engine) {
        const basket = engine.world.findActorOfType(Basket);
        const scoreManager = engine.world.findActorOfType(ScoreManager);

        if (this.overlaps(basket))
        {
            scoreManager.points += 1;
            return false;
        }

        engine.canvas.drawImage(this.texture, this.x, this.y, this.width, this.height);

        this.y += 500 * engine.deltaTime;

        return true;
    }
}