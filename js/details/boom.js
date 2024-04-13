import { Sprite, Assets} from '../pixi.mjs'
import {sprites } from '../sprites.js'


export const createBoom = () => {

const boom = new Sprite(Assets.get(sprites.boom.url))
boom.anchor.set(0.5,0.5)
boom.width = 50
boom.height = 50

return boom

}