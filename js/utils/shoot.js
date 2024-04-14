import { createBullet } from '../details/bullet.js';
import { createBoom } from '../details/boom.js';
export const shooting = (e , app, tank) => {
    const angle = Math.atan2(e.data.global.y - tank.position.y, e.data.global.x - tank.position.x);
    const bullet = createBullet();
    bullet.position.set(tank.position.x, tank.position.y);
    const targetPositions = e.data.getLocalPosition(app.stage);
    
    const animation = () => {
        const dx = bullet.position.x - targetPositions.x;
        const dy = bullet.position.y - targetPositions.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 10) {
            const boom = createBoom();
            boom.position.set(targetPositions.x, targetPositions.y);
            app.stage.addChild(boom);
            app.stage.removeChild(bullet);
            app.ticker.remove(animation); 
        } else {
            bullet.position.x += Math.cos(angle) * 20;
            bullet.position.y += Math.sin(angle) * 20;
        }

    };
    
    app.ticker.add(animation); 

    bullet.rotation = angle;
    app.stage.addChild(bullet);
};