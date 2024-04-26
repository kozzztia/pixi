import { Sprite, Texture, Container, Assets, TilingSprite } from "../pixi.mjs";
import { sprites } from "../sprites.js";

export default class Background extends Container{
    #background;
    #height;
    #width;
    constructor(appHeight, appWidth) {
        super();
        const texture = Texture.from(sprites.background.url);
        this.#height = appHeight;
        this.#width = appWidth;

        this.#background = new TilingSprite(texture);
        this.#background.width = this.#width;
        this.#background.height = this.#height;
        this.height = this.#height;
        this.width = this.#width;

        this.addChild(this.#background);
    }
}