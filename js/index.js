import { Application, Assets, Loader} from './pixi.mjs';
import Game from './Game.js'; 
import { sprites } from './sprites.js';

    const app = new Application();

    await Assets.load([
        sprites.tile.url,
        sprites.warrior.url,
        sprites.background.url,
    ])
    
    await app.init({
        canvas: document.getElementById('canvas'),
        background: 'green', 
        width: 800,
        height: 800,
        antialias: true,
        autoDensity: true,
        });

    const game = new Game(app);
    
    app.ticker.add(game.update, game)

    document.body.appendChild(app.canvas);


    
    

