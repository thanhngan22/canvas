import { ICircleMotion } from "../interfaces";

export default class CircleMotion implements ICircleMotion {
    // props
    Ix: number;
    Iy: number;
    distance: number;
    corner: number;
    x: number;
    y: number;
    deltaCorner: number;
    radius: number;
    color: string;
    c: CanvasRenderingContext2D;

    constructor({ Ix, Iy, distance, corner, x, y, deltaCorner, radius, color, c}: { Ix: number, Iy: number, distance: number, corner: number, x: number, y: number, deltaCorner: number, radius: number, color: string, c: CanvasRenderingContext2D }) {
        this.Ix = Ix;
        this.Iy = Iy;
        this.distance = distance;
        this.corner = corner;
        this.x = x;
        this.y = y;
        this.deltaCorner = deltaCorner;
        this.radius = radius;
        this.color = color;
        this.c = c;
    }

    drawFill(): void {
        this.c.beginPath();
        this.c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        this.c.fillStyle = this.color;
        this.c.fill();
    }

    updateFill(): void {
        // update corner
        this.corner += this.deltaCorner;

        this.x = this.Ix + this.distance * Math.cos(this.corner);
        this.y = this.Iy + this.distance * Math.sin(this.corner);

        this.drawFill();
    }

    setDeltaCorner(deltaCorner: number): void {
        this.deltaCorner = deltaCorner;
    }
}