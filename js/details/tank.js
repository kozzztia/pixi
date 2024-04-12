import {Container, Ticker} from "../pixi.mjs";
import { createAnimatedTrack } from "../details/animatedTrack.js";
import { createHull } from "../details/hull.js";
import { createTower } from "../details/tower.js";
import { createGun } from "./gun.js";


export const createTank = () =>{ 
    const tank = new Container();
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
    //bullet

    // tank
        tank.addChild(
            tankBody ,
            tankTower,
        );
        tank.position.set(200,200);

        // rotate tankTower
        tank.rotateTower = (positions) => {
            tankTower.rotation = Math.atan2(positions.y - tank.y -tank.width/2, positions.x - tank.x- tank.height/2)
        }
        // move tank
        tank.moveBy = (symbol) => {
            if(symbol=== '-'){
                tank.position.x -= Math.cos(tankBody.rotation) * 10
                tank.position.y -= Math.sin(tankBody.rotation) * 10
            }if(symbol=== '+'){
                tank.position.x += Math.cos(tankBody.rotation) * 10
                tank.position.y += Math.sin(tankBody.rotation) * 10
            }
        }

        // r0tate body
        tank.rotateBy = (symbol) => {
            if(symbol=== '-')tankBody.rotation -= 0.1
            if(symbol=== '+')tankBody.rotation += 0.1
        }

        // move indication
        tank.move = () => {
            leftTrack.play()
            rightTrack.play()
        }
        tank.stop = () => {
            leftTrack.stop()
            rightTrack.stop()
        }
        // fire
    return tank
}