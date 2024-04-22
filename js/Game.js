import Hero from './entityes/Hero.js';
import Background from './entityes/Background.js';
import Platform from './entityes/Platform.js';
import Tree from './entityes/Tree.js';

import platforms from './constants/platforms.js';
import trees from './constants/trees.js';

export default class Game {
    #app;
    #hero;
    #platforms;
    #background;
    #trees;

    constructor(app) {
        this.#app = app;

        this.#background = new Background();
        this.#app.stage.addChild(this.#background);

        this.#trees = trees.map(({ x, y, width }) => new Tree(x, y, width));
        this.#app.stage.addChild(...this.#trees);

        this.#platforms = platforms.map(({ x, y, width }) => new Platform(x, y, width));
        this.#app.stage.addChild(...this.#platforms);


        this.#hero = new Hero();
        this.#app.stage.addChild(this.#hero);


    }
    
    update() {
        this.#hero.update();
    }
}