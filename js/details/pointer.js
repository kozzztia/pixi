import { Sprite, Assets} from '../pixi.mjs'
import {sprites } from '../sprites.js'


export const createPointer = () => {

const pointer = new Sprite(Assets.get(sprites.pointer.url))
pointer.width = 50
pointer.height = 50
pointer.anchor.set(0.5,0.5)

return pointer

}