import { Sprite, Container, Assets } from "../pixi.mjs";
import { sprites } from "../sprites.js";

export default class Tree extends Container{
    #tree;
    constructor(x, y, width) {
        super();
        const pictureOne = Assets.get(sprites.treeOne.url);
        const pictureTwo = Assets.get(sprites.treeTwo.url);
        const picture = Math.random() > 0.5 ? pictureOne : pictureTwo;
        
        this.#tree = new Sprite(picture);
        this.#tree.width = picture.width ;
        this.#tree.height = picture.height;
        this.#tree.x = x;
        this.#tree.y = y;

        this.addChild(this.#tree);

    }
    updete() {
        // this.#tree.x -= 1;
    }
}