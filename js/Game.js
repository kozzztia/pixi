import Hero from './entityes/Hero.js';
import Background from './entityes/Background.js';
import Platform from './entityes/Platform.js';


import platforms from './constants/platforms.js';
import { isChekingAABB } from './utils/utils.js';

export default class Game {
    #app;
    #hero;
    #platforms;
    #background;
    #speed = 0;

    constructor(app) {
        this.#app = app;

        this.#background = new Background(this.#app.screen.height, this.#app.screen.width);
        this.#app.stage.addChild(this.#background);


        this.#platforms = platforms.map(({ x, y, width }) => new Platform(x, y, width));


        this.#app.stage.addChild(...this.#platforms);


        this.#hero = new Hero();
        this.#app.stage.addChild(this.#hero);
    }
    

    update() {
        const prevPoint = {
            x: this.#hero.x, 
            y: this.#hero.y
        };
        this.#hero.update();

        this.#platforms.forEach((platform) => {
            if(!isChekingAABB(platform, this.#hero)){
               return;
            }
            const pointY = this.#hero.y;
            this.#hero.y = prevPoint.y;
            if(!isChekingAABB(platform, this.#hero,)){
                return;
            }
            this.#hero.y = pointY;
            this.#hero.x = prevPoint.x;
        });
    }


}