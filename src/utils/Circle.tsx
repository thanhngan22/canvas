import { ICircle, CCircle } from "../interfaces";

export class Circle implements CCircle {

    // props
    x: number;
    y: number;
    dx: number;
    dy: number;
    r: number;
    color: string;
    c : CanvasRenderingContext2D;
    w: number;      // canvas width
    h: number;         // canvas height

    constructor (props: ICircle) {
        this.x = props.x;
        this.y = props.y;
        this.dx = props.dx;
        this.dy = props.dy;
        this.r = props.r;
        this.color = props.color;
        this.c = props.c;
        this.w = props.w;
        this.h = props.h;
    }

    drawStroke () : void {
        this.c.beginPath();
        this.c.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
        this.c.strokeStyle = this.color;
        this.c.stroke();
    }

    drawFill() {
        this.c.beginPath();
        this.c.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
        this.c.fillStyle = this.color;
        this.c.fill();
    }

    updateStroke() {
        this.bounce();

        this.x += this.dx;
        this.y += this.dy;

        this.drawStroke();
    }

    updateFill() {
        this.bounce();

        this.x += this.dx;
        this.y += this.dy;

        this.drawFill();
        
    }

    // bounce off the wall  
    bounce() {
        if (this.x + this.r > this.w || this.x - this.r < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.r > this.h || this.y - this.r < 0) {
            this.dy = -this.dy;
        }

    }

    // setters
    setX(x: number) {
        this.x = x;
    }

    setY(y: number) {
        this.y = y;
    }

    setDX(dx: number) {
        this.dx = dx;
    }

    setDY(dy: number) {
        this.dy = dy;
    }

    setR(r: number) {
        this.r = r;
    }

    setColor(color: string) {
        this.color = color;
    }

    setW(w: number) {
        this.w = w;
    }

    setH(h: number) {
        this.h = h;
    }

    setC(c: CanvasRenderingContext2D) {
        this.c = c;
    }


}

export default Circle;