export interface ICircleMotion {
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

        // methods
        drawFill(): void;
        updateFill(): void;

        setDeltaCorner(deltaCorner: number): void;

    }