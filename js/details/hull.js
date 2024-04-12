import { Assets,  Sprite } from "../pixi.mjs";
import { sprites } from "../sprites.js";


export const createHull = ()=>{ 
    const hullTexture = Assets.get(sprites.hull.url)
    const hull = new Sprite(hullTexture);
    hull.anchor.set(0.5,0.5);
    hull.position.set(0,0);
    // hull.eventMode('auto');
    // hull.buttonMode = true;
    // hull.interactive = true;
    // hull.cursor = 'pointer';
   return hull 
}