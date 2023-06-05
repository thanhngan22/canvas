export interface IColor {
    list: string[];
}


export interface CColor extends IColor {

    // methods
    getRandomColor(): string;
}