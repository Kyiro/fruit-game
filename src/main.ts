import { Engine } from "./engine";
import { GameWorld } from "./game";

const canvasElement = document.getElementById("app") as HTMLCanvasElement;

function resizeCanvas() {
    canvasElement.width = window.innerWidth;
    canvasElement.height = window.innerHeight;
}

resizeCanvas();

window.addEventListener('resize', resizeCanvas);

const engineInstance = new Engine(
    new GameWorld(),
    canvasElement,
    canvasElement.getContext("2d")!
);

engineInstance.start();