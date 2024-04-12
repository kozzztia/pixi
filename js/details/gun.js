import { Assets, Sprite } from "../pixi.mjs"
import { sprites } from "../sprites.js"

export const createGun = (x,y) => {
    const texture = Assets.get(sprites.gun.url)
    const gun = new Sprite(texture);
    gun.anchor.set(0.5,0.5);
    gun.position.set(x,y)
    return gun
}