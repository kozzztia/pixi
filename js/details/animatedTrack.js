import { AnimatedSprite, Assets, Container, Sprite } from "../pixi.mjs";
import { sprites } from "../sprites.js";


export const createAnimatedTrack = (x , y)=>{ 
    const trackTextureA = Assets.get(sprites.trackA.url)
    const trackTextureB = Assets.get(sprites.trackB.url)
    const track = new AnimatedSprite([trackTextureA, trackTextureB]);
    track.anchor.set(0.5,0.5);
    track.position.set(x,y)
    // track.play();
    track.animationSpeed = 0.2;
    track.loop = true
   return track 
}