import type { World } from "./world";

export class Engine {
    private lastTimestamp = 0;
    
    public timestamp = 0;
    public deltaTime = 0;

    public mouseX = 0;
    public mouseY = 0;

    constructor(
        public world: World,
        public canvasElement: HTMLCanvasElement,
        public canvas: CanvasRenderingContext2D
    ) {
        canvasElement.onmousemove = (e) => {
            this.mouseX = e.pageX - canvasElement.offsetLeft;
            this.mouseY = e.pageY - canvasElement.offsetTop;
        };
    }

    private tick(timestamp: number) {
        if (this.lastTimestamp == 0) {
            this.lastTimestamp = timestamp;
        }

        this.timestamp = timestamp;
        this.deltaTime = (timestamp - this.lastTimestamp) / 1000;

        this.world.tick(this);

        this.lastTimestamp = timestamp;
        requestAnimationFrame(this.tick.bind(this));
    }

    public start() {
        requestAnimationFrame(this.tick.bind(this));
    }
}