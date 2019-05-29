import starter from "./Starter.js";
import Utils from "./utils.js";
import GraphicsHelper from "./GraphicsHelper";
import Emitter from "component-emitter";

class Manager {
    constructor() {
        this._tick = this._tick.bind(this);

        this._player = null;
        this._enemies = {};
        this._bullets = {};

        starter.registerTick(this._tick);

        this._muteEvents = false;

        new Emitter(this);
    }

    reset() {
        this._muteEvents = true;

        this._player && this._player.destroy();

        Object.values(this._enemies).forEach(x => x.destroy(false));
        Object.values(this._bullets).forEach(x => x.destroy());

        this._muteEvents = false;
    }

    get enemiesExist() {
        return Object.values(this._enemies).length !== 0;
    }

    get playerExists() {
        return this._player !== null;
    }

    registerEnemy(enemy) {
        const id = Utils.getGuid();
        this._enemies[id] = enemy;
        this._registerTick(enemy).then(registration => {
            enemy.once("destroy", () => {
                starter.unregisterTick(registration);
                delete this._enemies[id];

                if (!this._muteEvents) {
                    this.emit("updateScore", {
                        action: "enemy:destroy",
                        info: { enemyType: enemy.enemyType },
                    });
                }
            });
        });
    }

    registerPlayer(player) {
        this._player = player;
        this._registerTick(player).then(registration => {
            player.once("destroy", () => {
                starter.unregisterTick(registration);
                this._player = null;
            });
        });
    }

    registerBullet(bullet) {
        const id = Utils.getGuid();
        this._bullets[id] = bullet;
        this._registerTick(bullet).then(registration => {
            bullet.once("destroy", () => {
                starter.unregisterTick(registration);
                delete this._bullets[id];
            });
        });
    }

    _registerTick(object) {
        if (object && Utils.isFunction(object.tick)) {
            return starter.registerTick(delta => object.tick(delta));
        }

        return Promise.reject();
    }

    _tick(delta) {
        this._checkCollision();

        // dev mode
        // this._drawCollisionInfo(this._bullets);
        // this._drawCollisionInfo(this._objects);
    }

    _drawCollisionInfo(source) {
        this._devModeGraphics = this._devModeGraphics || {};

        Object.keys(source).forEach(key => {
            const o = source[key];
            const rect = o.collisionInfo;

            if (!this._devModeGraphics[key]) {
                this._devModeGraphics[key] = GraphicsHelper.drawRect({
                    x: 0,
                    y: 0,
                    width: rect.width,
                    height: rect.height,
                });

                starter.field.addChild(this._devModeGraphics[key]);
            }

            this._devModeGraphics[key].x = rect.x;
            this._devModeGraphics[key].y = rect.y;
        });
    }

    _isCollide(obj1, obj2) {
        if (!obj1 || !obj2 || obj1.destroyed || obj2.destroyed) {
            return false;
        }

        const ci1 = obj1.collisionInfo;
        const ci2 = obj2.collisionInfo;

        // rectangle collision
        return (
            ci2.x < ci1.x + ci1.width &&
            ci2.x + ci2.width > ci1.x &&
            ci2.y < ci1.y + ci1.height &&
            ci2.y + ci2.height > ci1.y &&
            obj1.canInteract(obj2) &&
            obj2.canInteract(obj1)
        );

        // const distance = obj1.collisionInfo.size + obj2.collisionInfo.size;
        // const dx = obj1.collisionInfo.x - obj2.collisionInfo.x;
        // const dy = obj1.collisionInfo.y - obj2.collisionInfo.y;

        // return distance > Math.sqrt(dx * dx + dy * dy) && obj1.canInteract(obj2) && obj2.canInteract(obj1);
    }

    _checkCollision() {
        const enemies = Object.values(this._enemies);
        const bullets = Object.values(this._bullets);

        bullets.forEach(b => {
            if (this._isCollide(this._player, b)) {
                this._player.onCollision();
                b.onCollision();
            }

            enemies.forEach(o => {
                if (this._isCollide(o, b)) {
                    o.onCollision();
                    b.onCollision();
                }
            });
        });
    }
}

export const gameManager = new Manager();

// dev mode
window.gameManager = gameManager;
