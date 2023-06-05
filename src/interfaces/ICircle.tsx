export interface ICircle {
    // props
    x: number;
    y: number;
    dx: number;
    dy: number;
    r: number;
    color: string;

    // others 
    c : CanvasRenderingContext2D;
    w: number;      // canvas width
    h: number;         // canvas height


}

export interface CCircle extends ICircle {
        // methods
        drawStroke(): void;
        drawFill(): void;
        updateStroke(): void;
        updateFill(): void;
        bounce(): void;

        // setters
        setX(x: number): void;
        setY(y: number): void;
        setDX(dx: number): void;
        setDY(dy: number): void;
        setR(r: number): void;
        setColor(color: string): void;
        setW(w: number): void;
        setH(h: number): void;
        setC(c: CanvasRenderingContext2D): void;
}