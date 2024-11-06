import { World } from "./world";
import { Background } from "./actors/background";
import { Basket } from "./actors/basket";
import { Engine } from "./engine";
import { Fruit } from "./actors/fruit";
import { randomBetween } from "./random";
import { ScoreManager } from "./actors/score-manager";

export class GameWorld extends World {
    public lastSpawnedFruit = 0;
    public scoreManager = new ScoreManager();

    constructor() {
        super();

        this.actors.push(this.scoreManager);
        this.actors.push(new Background());
        this.actors.push(new Basket());
    }

    override tick(engine: Engine) {
        if (engine.timestamp - this.lastSpawnedFruit > 500 - this.scoreManager.points) {
            this.actors.push(new Fruit(randomBetween(50, engine.canvasElement.width - 100), -50));
            this.lastSpawnedFruit = engine.timestamp;
        }

        return super.tick(engine);
    }
}