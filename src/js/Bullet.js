import starter from "./Starter";
import SETTINGS from "./settings.js";
import Utils from "./utils.js";
import Emitter from "component-emitter";
import GraphicsHelper from "./GraphicsHelper";
import TWEEN from "tween.js";
import Explosion from "./Explosion";

export default class Bullet {
    constructor(x, y, dir, owner) {
        this.sprite = null;
        this._owner = owner;
        this._shotTime = 0;
        this._dir = dir;
        this._destroyed = false;

        this.speed = 0.1;
        this.rotation = 0;

        this.init(x, y);
        this.sprite.setParent(starter.field);

        new Emitter(this);
    }

    init(x, y) {
        this.sprite = GraphicsHelper.createSprite({
            name: "bullet_1",
            x,
            y,
        });

        this.sprite.anchor.set(0.5);
    }

    canInteract(obj) {
        return obj.constructor != this._owner.constructor;
    }

    onCollision(obj) {
        this.destroy();
    }

    destroy() {
        this._destroyed = true;
        this.emit("destroy");
        starter.field.removeChild(this.sprite);
        this._owner = null;
        this.sprite.destroy();
        this.sprite = null;
    }

    get destroyed() {
        return this._destroyed;
    }

    get collisionInfo() {
        const { width, height, x, y } = this.sprite;
        return { x: x - width / 2, y: y - height / 2, width, height };
    }

    _move(delta) {
        this.sprite.y -= delta * this.speed * this._dir;
        this.sprite.rotation += this.rotation;
    }

    tick(delta) {
        if (!this.sprite) {
            return;
        }

        this._move(delta);

        if (2 * SETTINGS.appSizes.height < this.sprite.y || this.sprite.y < -2 * SETTINGS.appSizes.height) {
            this.destroy();
        }
    }
}

export class StarBullet extends Bullet {
    constructor(x, y, dir, owner) {
        super(x, y, dir, owner);
        this.speed = 0.3;
        this.rotation = 0.15;
    }

    init(x, y) {
        this.sprite = GraphicsHelper.createSprite({
            name: "star-shuriken",
            x,
            y,
        });

        this.sprite.anchor.set(0.5);
    }
}

export class EasyBulletWater extends Bullet {
    constructor(x, y, dir, owner) {
        super(x, y, dir, owner);
        this.speed = 0.2;
        this.rotation = 0.1;
    }

    init(x, y) {
        this.sprite = GraphicsHelper.createSprite({
            name: "bullet_1",
            x,
            y,
        });

        this.sprite.anchor.set(0.5);
    }

    destroy() {
        new Explosion().animate("b:1..10", this.collisionInfo.x, this.collisionInfo.y);
        super.destroy();
    }
}

export class MediumBulletWater extends Bullet {
    constructor(x, y, dir, owner) {
        super(x, y, dir, owner);
        this.speed = 0.25;
        this.rotation = 0.5;
    }

    init(x, y) {
        this.sprite = GraphicsHelper.createSprite({
            name: "enemy_default_bullet_2",
            x,
            y,
        });

        this.sprite.anchor.set(0.5);
    }

    destroy() {
        new Explosion().animate("b:1..10", this.collisionInfo.x, this.collisionInfo.y);
        super.destroy();
    }
}

export class PlayerDefaultBullet extends Bullet {
    constructor(x, y, dir, owner) {
        super(x, y, dir, owner);
        this.speed = 0.4;
        this.rotation = 0;
    }

    init(x, y) {
        this.sprite = GraphicsHelper.createSprite({
            name: "player_default_bullet_1",
            x,
            y,
        });

        this.sprite.anchor.set(0.5);
    }

    destroy() {
        new Explosion().animate("b:1..15", this.collisionInfo.x, this.collisionInfo.y, 1);

        super.destroy();
    }
}

export class TrappDillerDefaultBullet extends Bullet {
    constructor(x, y, dir, owner) {
        super(x, y, dir, owner);
        this.speed = 0.35;
        this.rotation = 0.17;
        this._dirX = this.sprite.x < 0 ? Math.random() : -Math.random();
    }

    init(x, y) {
        this.sprite = GraphicsHelper.createSprite({
            name: "trapDillerDefaultBullet",
            x,
            y,
        });

        this.sprite.anchor.set(0.5);
    }

    _move(delta) {
        this.sprite.y -= delta * this.speed * this._dir;
        this.sprite.x += delta * this.speed * this._dirX;
        this.sprite.rotation += this.rotation;
    }

    destroy() {
        new Explosion().animate("b:1..15", this.collisionInfo.x, this.collisionInfo.y, 1);

        super.destroy();
    }
}

export class LiunkDefaultBullet extends Bullet {
    constructor(x, y, dir, owner) {
        super(x, y, dir, owner);
        this.speed = 0.35;
        this.rotation = 0.14;
        this._dirX = this.sprite.x < 0 ? Math.random() : -Math.random();
    }

    init(x, y) {
        this.sprite = GraphicsHelper.createSprite({
            name: "LiunkDefaultBullet",
            x,
            y,
        });

        this.sprite.anchor.set(0.5);
    }

    destroy() {
        new Explosion().animate("b:1..15", this.collisionInfo.x, this.collisionInfo.y, 1);

        super.destroy();
    }

    _move(delta) {
        this.sprite.y -= delta * this.speed * this._dir;
        this.sprite.x += delta * this.speed * this._dirX;
        this.sprite.rotation += this.rotation;
    }
}

export class OzmenDefaultBullet extends Bullet {
    constructor(x, y, dir, owner) {
        super(x, y, dir, owner);
        this.speed = 0.4;
        this.rotation = 0.12;
        this._dirX = this.sprite.x < 0 ? Math.random() : -Math.random();

        this._startAnimation();
    }

    init(x, y) {
        this.sprite = GraphicsHelper.createSprite({
            name: "OzmenDefaultBullet",
            x,
            y,
        });

        this.sprite.anchor.set(0.5);
    }

    _startAnimation() {
        this._animationTween = new TWEEN.Tween(this.sprite.scale)
            .to({ x: [1.3, 0.8, 1], y: [1.3, 0.8, 1] }, 1000)
            .repeat(Infinity)
            .start();
    }

    destroy() {
        new Explosion().animate("b:1..15", this.collisionInfo.x, this.collisionInfo.y, 1);

        this._animationTween.stop();
        super.destroy();
    }

    _move(delta) {
        this.sprite.y -= delta * this.speed * this._dir;
        this.sprite.x += delta * this.speed * this._dirX;
        this.sprite.rotation += this.rotation;
    }
}
