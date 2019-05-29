import starter from "./Starter";
import Lives from "./Lives.js";
import SETTINGS from "./settings.js";
import HandleUsersActions from "./HandleUsersActions.js";
import Emitter from "component-emitter";
import { Bullet, PlayerDefaultBullet, EasyBulletWater } from "./Bullet";
import GraphicsHelper from "./GraphicsHelper";
import TWEEN from "tween.js";

class Player {
    constructor(x, y, name) {
        this.container = null;
        this.board = null;
        this.sprite = null;
        this.gun = null;
        this.muzzle = null;
        this.healthBar = null;

        this.gunTween = null;

        this.maxLives = 5;
        this.lives = this.maxLives;
        this.healthBarOffset = 30;

        this._timeBetweenShot = 500;
        this._destroyed = false;

        this.init(name, x, y);
        this.sprite.setParent(this.container);

        this._updateHealthBar();

        new Emitter(this);
        this.lifes = new Lives(0, -(SETTINGS.appSizes.height / 2));
    }

    init(name, x, y) {
        this.container = GraphicsHelper.createContainer({ x: x, y });
        starter.field.addChild(this.container);

        this.board = GraphicsHelper.createSprite({
            name: "player_board_1",
            x: 0,
            y: -10,
        });

        this.board.anchor.set(0.5);
        this.board.setParent(this.container);

        this.sprite = GraphicsHelper.createSprite({
            name: name,
            x: 0,
            y: -60,
        });
        this.sprite.anchor.set(0.5);

        this.sprite.setParent(this.container);

        this.gun = GraphicsHelper.createSprite({
            name: "gun_1",
            x: 75,
            y: this.board.y - 20,
        });

        this.gun.anchor.set(0.5);
        this.gun.setParent(this.container);

        this.muzzle = GraphicsHelper.createSprite({
            name: "Muzzle",
            x: 75,
            y: this.board.y - 90,
        });

        this.muzzle.anchor.set(0.5);
        this.muzzle.alpha = 0;
        this.muzzle.setParent(this.container);

        this.healthBar = GraphicsHelper.fillRect({
            width: 100,
            height: 8,
            alpha: 0.8,
            color: 0xfff133,
        });

        this.healthBar.x -= 45;
        this.healthBar.y += 15;
        this.healthBar.setParent(this.container);
    }

    _move(delta) {
        const cursorPosX = HandleUsersActions.cursorPosition.x;
        const speed = 1;
        let dx = cursorPosX - this.container.x;

        if (dx !== 0) {
            var distance = Math.min(Math.abs(dx), speed * delta);
            this.container.x += Math.sign(dx) * distance;
        }

        const halfWidth = SETTINGS.appSizes.width / 2;
        const halfPlayerWidth = this.container.width / 2;

        if (this.container.x + halfPlayerWidth > halfWidth || this.container.x - halfPlayerWidth < -halfWidth) {
            this.container.x =
                this.container.x + halfPlayerWidth > halfWidth
                    ? halfWidth - halfPlayerWidth
                    : -halfWidth + halfPlayerWidth;
        }
    }

    _shoot(delta) {
        this._timeBetweenShot -= delta;

        if (this._timeBetweenShot <= 0) {
            this.animateGun();

            const { x: gun_x, y: board_y, height: gun_height } = this.gun;
            const { x: base_x, y: base_y } = this.container;

            // create bullet
            const bulletX = base_x + gun_x;
            const bulletY = base_y - gun_height;
            gameManager.registerBullet(new PlayerDefaultBullet(bulletX, bulletY, 1, this));

            this._timeBetweenShot = 200;
        }
    }

    _updateHealthBar() {
        this.healthBar.width = (100 / this.maxLives) * this.lives;
    }

    canInteract() {
        return true;
    }

    onCollision() {
        this.lives--;
        this.lifes.decreaseLive = 1;
        this._updateHealthBar();

        if (this.lives <= 0) {
            this.destroy();
        }
    }

    animateGun() {
        if (this.gunTween) {
            this.gunTween.stop();
            this.gun.pivot.x = 0;
        }

        this.muzzle.alpha = 1;

        this.gunTween = new TWEEN.Tween(this.gun.pivot)
            .to({ y: [-10, 0] }, 60)
            .yoyo(false)
            .easing(TWEEN.Easing.Quadratic.Out)
            .onUpdate(k => {
                this.muzzle.alpha = 1 - k;
            })
            .start();
    }

    get collisionInfo() {
        const { x: base_x, y: base_y } = this.container;
        const { width, height, x, y } = this.sprite;

        return { x: base_x + x, y: base_y + y, width, height };
    }

    get destroyed() {
        return this._destroyed;
    }

    destroy() {
        this._destroyed = true;
        this.emit("destroy");

        starter.field.removeChild(this.container);
        this.container.destroy(true);
        this.container = null;
        this.sprite = null;
    }

    tick(delta) {
        this._move(delta);
        this._shoot(delta);
    }
}

export default Player;
