import { Sprite, Assets} from '../pixi.mjs'
import {sprites } from '../sprites.js'

export {Graphics} from '../pixi.mjs'

export const createBullet = () => {

const bullet = new Sprite(Assets.get(sprites.bullet.url))
bullet.width = 100
bullet.height = 50
bullet.anchor.set(0.5,0.5)
bullet.position.set(0,0)

return bullet

}