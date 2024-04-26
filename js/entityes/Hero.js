import { Sprite, Texture, Container, Assets , Graphics} from "../pixi.mjs";

import { sprites } from "../sprites.js";

export default class Hero extends Container{
    #gravity_force = .1;
    #background
    constructor() {
        super();
        const picture = Assets.get(sprites.warrior.url);

        this.view = new Sprite(picture);

        this.width = picture.width;
        this.height = picture.height;
        this.position.set(0, 200);
        this.addChild(this.view);
    }
    

    update () {
        this.y += 1;
        this.x += .5;

        if (this.x > 800) {
            this.x = 0;
            this.y = 0
        }
    }


}