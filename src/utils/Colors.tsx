import { CColor} from "../interfaces";

export default class Colors implements CColor {
    // props
    list: string[];

    // constructor
    constructor() {
        this.list = [
            "#BA4949",
            "#38858A",
            "#397097",
            "#A4893C",
            "#7D53A2",
            "#AF4E91",
            "#518A58",
            "#545764"];
    }

    // methods
    getRandomColor(): string {
        return this.list[Math.floor(Math.random() * this.list.length)];
    }

}