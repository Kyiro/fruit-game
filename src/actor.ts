import { Engine } from "./engine";

export abstract class Actor {
    constructor(
        public x: number,
        public y: number,
        public width: number,
        public height: number
    ) {}

    abstract tick(engine: Engine): boolean;

    overlaps(another: Actor) {
        return this.x <= another.x + another.width &&
               this.x + this.width >= another.x &&
               this.y <= another.y + another.height &&
               this.y + this.height >= another.y;
    }
}