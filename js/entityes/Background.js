import { Sprite, Texture, Container, Assets, TilingSprite } from "../pixi.mjs";
import { sprites } from "../sprites.js";

export default class Platform extends Container{
    #background
    constructor() {
        super();
        const texture = Texture.from(sprites.background.url);

        this.#background = new TilingSprite(texture);
        this.#background.width = 800;
        this.#background.height = 800;

        this.addChild(this.#background);

    }
    // updete() {
    //     this.#texture 
    // }
}