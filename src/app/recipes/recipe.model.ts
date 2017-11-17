export class Recipe{
    public name: string;
    public description: string;
    public imagePath: string;

    constructor(name: string, desp: string, imagePath: string){
        this.name = name;
        this.description = desp;
        this.imagePath = imagePath;
    }
}