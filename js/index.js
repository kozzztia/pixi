import { Application, Assets, Sprite, Container, GraphicsContext, Graphics, Rectangle } from './pixi.mjs';
import { sprites } from './sprites.js';
import { createTank } from './details/tank.js';
import { createBullet } from './details/bullet.js';
import { createBoom } from './details/boom.js';
import { createPointer } from './details/pointer.js';


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
        sprites.pointer.url
    ]
    );
    await app.init({
        canvas: document.getElementById('canvas'),
        background: '#1099bb', 
        resizeTo: window,
        width: 1200,
        height: 1200,
        antialias: true,
        autoDensity: true,
        });


    document.body.appendChild(app.canvas);

    const tank = createTank()
    tank.width = 150;
    tank.height = 100;


    app.stage.interactive = true;
    app.stage.interactiveChildren = false;
    app.stage.cursor = 'none';
    app.stage.hitArea = new Rectangle(0, 0, app.screen.width, app.screen.height);
    app.stage.addChild(tank);



    const pointer = createPointer();
    app.cursor = 'none';
    app.stage.addChild(pointer);

    app.stage.on('pointermove', (e) => {
        const angle = Math.atan2(e.data.global.y - tank.position.y, e.data.global.x - tank.position.x)
        
        pointer.position.set(e.data.global.x, e.data.global.y)
        pointer.rotation = angle;
        tank.rotateTower(angle)
    })

    app.stage.on('pointerdown', (e) => {
        const angle = Math.atan2(e.data.global.y - tank.position.y, e.data.global.x - tank.position.x);
        const bullet = createBullet();
        bullet.position.set(tank.position.x, tank.position.y);
        const targetPositions = e.data.getLocalPosition(app.stage);
    
        app.ticker.add(() => {
            const dx = bullet.position.x - targetPositions.x;
            const dy = bullet.position.y - targetPositions.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
    
            if (distance < 10) {
                const boom = createBoom();
                boom.position.set(targetPositions.x, targetPositions.y);
                app.stage.addChild(boom);
                app.stage.removeChild(bullet);
                app.ticker.remove(); // Остановка обработчика анимации
            } else {
                bullet.position.x += Math.cos(angle) * 20;
                bullet.position.y += Math.sin(angle) * 20;
            }
        });
    
        bullet.rotation = angle;
        app.stage.addChild(bullet);
    });
}
)()
