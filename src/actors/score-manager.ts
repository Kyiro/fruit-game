import { Actor } from "../actor";

export class ScoreManager extends Actor {
    private scoreElement = document.getElementById("score")!;
    private previousScore = 0;

    constructor(public points = 0) {
        super(0, 0, 0, 0);
    }

    tick() {
        if (this.previousScore != this.points) {
            this.previousScore = this.points;
            this.scoreElement.textContent = this.points.toString();
        }

        return true;
    }
}