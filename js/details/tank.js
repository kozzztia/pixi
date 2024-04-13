import {Container, Ticker} from "../pixi.mjs";
import { createAnimatedTrack } from "../details/animatedTrack.js";
import { createHull } from "../details/hull.js";
import { createTower } from "../details/tower.js";
import { createGun } from "./gun.js";


export const createTank = () =>{ 
    const tank = new Container();
    tank.position.set(window.innerWidth/2, window.innerHeight/2);
    tank.pivot.set(0,0);
    // tankBody
        const tankBody = new Container();
        const leftTrack = createAnimatedTrack(0,65);

        const rightTrack = createAnimatedTrack(0,-65);
        const hull = createHull();
        tankBody.addChild(leftTrack, rightTrack, hull);
    // tankTower
        const tankTower = new Container();

        const tower = createTower();
        const leftGun = createGun(150,25);
        const rightGun = createGun(130,-25);
        tankTower.addChild(leftGun, rightGun ,tower);
    // tank
        tank.addChild(
            tankBody ,
            tankTower,
        );
        // functions
            // rotateTower
            tank.rotateTower = (angle) => {
                tankTower.rotation = angle
            }

    return tank
}