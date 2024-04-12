import { Application, Assets, Sprite, Container, GraphicsContext, Graphics, Rectangle } from './pixi.mjs';
import { sprites } from './sprites.js';
import { createTank } from './details/tank.js';
import { createBullet } from './details/bullet.js';
import { createBoom } from './details/boom.js';


(async ()=>{
    // Create a PixiJS application.
    const app = new Application();

    await Assets.load(
        [sprites.hull.url,
        sprites.trackA.url, 
        sprites.trackB.url, 
        sprites.tower.url, 
        sprites.gun.url, 
        sprites.bullet.url,
        sprites.boom.url,
    ]
    );


    // Intialize the application.
    await app.init({
        canvas: document.getElementById('canvas'),
        background: '#1099bb', 
        resizeTo: window, 
        antialias: true,
        autoDensity: true,
        });


    document.body.appendChild(app.canvas);

    const tank = createTank()
    tank.width = app.screen.height/10;
    tank.height = app.screen.height/15;
    tank.position.set(app.screen.width/2, app.screen.height/2);


    app.stage.interactive = true;
    app.stage.interactiveChildren = false;
    app.stage.cursor = 'pointer';
    app.stage.hitArea = new Rectangle(0, 0, app.screen.width, app.screen.height);


    // mouse events

    app.stage.on('pointermove', (e) => {
        const positions = e.data.getLocalPosition(app.stage)
        tank.rotateTower(positions)
    })

        // shoot bullet
    app.stage.on('pointerdown', (e) => {
        const positions = e.data.getLocalPosition(app.stage);
        const bullet = createBullet();
        bullet.position.set(tank.x,tank.y);
        app.stage.addChild(bullet);
        const targetX = positions.x;
        const targetY = positions.y;
        const angle = Math.atan2(targetY - tank.y - tank.width / 2, targetX - tank.x - tank.height / 2);
        bullet.rotation = angle;

        app.ticker.add(()=>{
            const dx = targetX - bullet.position.x;
            const dy = targetY - bullet.position.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < tank.width) {
                const boom = createBoom();
                boom.position.set(targetX, targetY);
                app.stage.removeChild(bullet);
                app.stage.addChild(boom);


            } else {
                bullet.position.x += Math.cos(angle) * 100;
                bullet.position.y += Math.sin(angle) * 100;
            }
        });
    });



    // keyboard events
        document.addEventListener('keypress', (e) => {
            if (e.key === 'w') {
                tank.moveBy('+');
                tank.move()
            }
            if (e.key === 's') {
                tank.moveBy('-');
                tank.move()
            }
            if(e.key === 'd'){
                tank.rotateBy('+')
                tank.move()
            }
            if(e.key === 'a'){
                tank.rotateBy('-')
                tank.move()
            }
        })
        document.addEventListener('keyup', (e) => {
            if (e.key === 'w' || e.key === 's' || e.key === 'a' || e.key === 'd') {
               tank.stop()
            }
        })

        
        // app.ticker.add((e)=>{
        //        tank.shoot(e)
        // })


    app.stage.addChild(tank);
}
)()