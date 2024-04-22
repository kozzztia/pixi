import { Sprite, Texture, Container, Assets, TilingSprite } from "../pixi.mjs";
import { sprites } from "../sprites.js";

export default class Platform extends Container{
    #tile;
    constructor(x, y, width) {
        super();
        const picture = Assets.get(sprites.tile.url);
        
        this.#tile = new TilingSprite(picture);
        this.#tile.width = width;
        this.#tile.height = picture.height;
        this.#tile.x = x;
        this.#tile.y = y - picture.height;

        this.addChild(this.#tile);

    }
    updete() {
        this.#tile.x -= 1;
    }
}