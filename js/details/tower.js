import { Assets,  Sprite } from "../pixi.mjs";
import { sprites } from "../sprites.js";

export const createTower = ()=>{ 
     const towerTexture = Assets.get(sprites.tower.url)
     const tower = new Sprite(towerTexture);
     tower.anchor.set(0.5,0.5);
     tower.position.set(20,0)
    return tower 
}