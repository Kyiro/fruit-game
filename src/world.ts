import { Actor } from "./actor";
import { Engine } from "./engine";

export class World {
    protected actors: Actor[] = [];
    
    tick(engine: Engine) {
        for (let i = 0; i < this.actors.length; i++) {
            if (!this.actors[i].tick(engine)) {
                this.actors[i] = undefined!;
            }
        }

        this.actors = this.actors.filter(i => !!i);

        return true;
    }

    findActorOfType<T>(type: abstract new (...args: any[]) => T) {
        return this.actors.find(i => i instanceof type) as T;
    }
}