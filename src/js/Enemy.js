import starter from "./Starter";
import Utils from "./utils.js";
import Emitter from "component-emitter";
import {
    Bullet,
    EasyBulletWater,
    MediumBulletWater,
    TrappDillerDefaultBullet,
    LiunkDefaultBullet,
    OzmenDefaultBullet,
} from "./Bullet";
import GraphicsHelper from "./GraphicsHelper";
import Money from "./Money";
import Explosion from "./Explosion";
import STYLES from "./styles.js";
import TWEEN from "tween.js";

export default class Enemy {
    constructor(settings) {
        const { x, y, step } = settings;

        this.container = null;
        this.sprite = null;
        this.healthBar = null;

        this.step = step;
        this.biasX = step;
        this.maxLives = 0;
        this.healthWidth = 70;
        // TODO: rename to lives
        this._lives = this.maxLives;
        this.speed = 2;
        this.dir = 1;

        this._destroyed = false;
        this._timeBetweenShot = Utils.randomNumber(500, 5000);

        this.container = GraphicsHelper.createContainer({ x, y });
        starter.field.addChild(this.container);

        this.init();
        this.sprite.setParent(this.container);
        this.healthBar.setParent(this.container);

        this._updateHealthBar();

        new Emitter(this);
    }

    init() {
        this.sprite = GraphicsHelper.createSprite({
            name: "bullet_1",
            x: 0,
            y: 10,
        });

        this.healthBar = GraphicsHelper.fillRect({
            width,
            height: 8,
            alpha: 0.8,
            color: 0xffffff,
        });
    }

    get collisionInfo() {
        const { x: base_x, y: base_y } = this.container;
        const { width, height, x, y } = this.sprite;

        return {
            x: base_x + x,
            y: base_y + y,
            width,
            height,
            center: { x: base_x + x + width / 2, y: base_y + y + height / 2 },
        };
    }

    canInteract() {
        return true;
    }

    _move() {
        this.container.x += this.speed * this.dir;
        this.biasX -= this.speed;

        if (this.biasX <= 0) {
            this.dir *= -1;
            this.biasX = this.step;
        }
    }

    _shoot(delta) {
        this._timeBetweenShot -= delta;

        if (this._timeBetweenShot <= 0) {
            const { x: base_x, y: base_y } = this.container;
            const { width, height, x, y } = this.sprite;

            // create bullet
            const bulletX = base_x + x + width / 2;
            const bulletY = base_y + height;
            gameManager.registerBullet(new EasyBulletWater(bulletX, bulletY - this.sprite.height / 2, -1, this));

            this._timeBetweenShot = Utils.randomNumber(500, 5000);
        }
    }

    _updateHealthBar() {
        this.healthBar.width = (this.healthWidth / this.maxLives) * this._lives;
    }

    onCollision() {
        this._lives -= 1;

        this._updateHealthBar();

        if (this._lives <= 0) {
            this.destroy();
        }
    }

    get destroyed() {
        return this._destroyed;
    }

    destroy(animate = true) {
        this._destroyed = true;
        this.emit("destroy");
        if (this._animationTween) {
            this._animationTween.stop();
        }
        if (animate) {
            new Money(this.container.x + this.sprite.width / 2, this.container.y + this.sprite.height / 2);
            new Explosion().animate("a:1..10", this.collisionInfo.center.x, this.collisionInfo.center.y);
        }

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

export class EnemyEasyLevel extends Enemy {
    constructor(settings) {
        super(settings);

        this.maxLives = 3;
        this._lives = this.maxLives;

        this._timeBetweenShot = Utils.randomNumber(3000, 5000);
        this._updateHealthBar();
    }

    init() {
        this.sprite = GraphicsHelper.createSprite({
            name: "enemyEasy",
            x: 0,
            y: 10,
        });

        this.healthBar = GraphicsHelper.fillRect({
            width: 75,
            height: 8,
            alpha: 0.8,
            color: 0xffffff,
        });
    }
}

export class EnemyMediumLevel extends Enemy {
    constructor(settings) {
        super(settings);

        this.maxLives = 4;
        this._lives = this.maxLives;

        this._timeBetweenShot = Utils.randomNumber(2500, 5000);
    }

    init() {
        this.sprite = GraphicsHelper.createSprite({
            name: "enemyMedium",
            x: 0,
            y: 10,
        });

        this.healthBar = GraphicsHelper.fillRect({
            width: 75,
            height: 8,
            alpha: 0.8,
            color: 0xff4c21,
        });
    }

    _shoot(delta) {
        this._timeBetweenShot -= delta;

        if (this._timeBetweenShot <= 0) {
            const { x: base_x, y: base_y } = this.container;
            const { width, height, x, y } = this.sprite;

            // create bullet
            const bulletX = base_x + x + width / 2;
            const bulletY = base_y + height;
            gameManager.registerBullet(new MediumBulletWater(bulletX, bulletY - this.sprite.height / 2, -1, this));

            this._timeBetweenShot = Utils.randomNumber(2500, 5000);
        }
    }
}

export class TrapDillerMediumBoss extends Enemy {
    constructor(settings) {
        super(settings);

        this.healthWidth = 90;
        this.maxLives = 10;
        this._lives = this.maxLives;
        this.speed = 0;
        this.avatarImagePath = "avatar_TrapDiller";

        this._timeBetweenShot = Utils.randomNumber(2500, 5000);

        this._startAnimation();
        this._updateHealthBar();
    }

    init() {
        this.board = GraphicsHelper.createSprite({
            name: "boss_board_1",
            x: -50,
            y: 0,
        });
        this.board.setParent(this.container);

        this.sprite = GraphicsHelper.createSprite({
            name: "BossTrapDiller",
            x: 0,
            y: -130,
        });

        this.healthBar = GraphicsHelper.fillRect({
            width: this.healthWidth,
            height: 8,
            alpha: 0.8,
            color: 0xff4c21,
        });
        this.healthBar.y = -150;
        this.healthBar.x = 10;

        this._spriteText = Utils.drawText({
            parent: this.container,
            text: `TrapDiller`,
            x: 50,
            y: 80,
            style: STYLES.miniBoss,
        });
    }

    _startAnimation() {
        const base_y = this.container.y;

        this._animationTween = new TWEEN.Tween(this.container)
            .to({ y: [base_y + 10, base_y, base_y - 10, base_y] }, 5000)
            .repeat(Infinity)
            .start();
    }

    _shoot(delta) {
        this._timeBetweenShot -= delta;

        if (this._timeBetweenShot <= 0) {
            const { x: base_x, y: base_y } = this.container;
            const { width, height, x, y } = this.sprite;

            // create bullet
            const bulletX = base_x + x + width / 2;
            const bulletY = base_y + height;
            gameManager.registerBullet(new TrappDillerDefaultBullet(bulletX, bulletY - this.sprite.height, -1, this));

            this._timeBetweenShot = Utils.randomNumber(1000, 2500);
        }
    }
}

export class LiunkMediumBoss extends Enemy {
    constructor(settings) {
        super(settings);

        this.healthWidth = 90;
        this.maxLives = 10;
        this._lives = this.maxLives;
        this.speed = 0;
        this.avatarImagePath = "avatar_Liunk";

        this._timeBetweenShot = Utils.randomNumber(2500, 5000);
        this._startAnimation();
        this._updateHealthBar();
    }

    init() {
        this.board = GraphicsHelper.createSprite({
            name: "boss_board_1",
            x: -50,
            y: 0,
        });
        this.board.setParent(this.container);

        this.sprite = GraphicsHelper.createSprite({
            name: "MiniBossLiunk",
            x: 0,
            y: -150,
        });

        this.healthBar = GraphicsHelper.fillRect({
            width: this.healthWidth,
            height: 8,
            alpha: 0.8,
            color: 0xff4c21,
        });
        this.healthBar.y = -165;
        this.healthBar.x = 20;

        this._spriteText = Utils.drawText({
            parent: this.container,
            text: `Liunk`,
            x: 50,
            y: 80,
            style: STYLES.miniBoss,
        });
    }

    _startAnimation() {
        const base_y = this.container.y;

        this._animationTween = new TWEEN.Tween(this.container)
            .to({ y: [base_y + 10, base_y, base_y - 10, base_y] }, 5000)
            .repeat(Infinity)
            .start();
    }

    _shoot(delta) {
        this._timeBetweenShot -= delta;

        if (this._timeBetweenShot <= 0) {
            const { x: base_x, y: base_y } = this.container;
            const { width, height, x, y } = this.sprite;

            // create bullet
            const bulletX = base_x + x + width / 2;
            const bulletY = base_y + height;
            gameManager.registerBullet(new LiunkDefaultBullet(bulletX, bulletY - this.sprite.height, -1, this));

            this._timeBetweenShot = Utils.randomNumber(1000, 2500);
        }
    }
}

export class OzmenHardBoss extends Enemy {
    constructor(settings) {
        super(settings);

        this.healthWidth = 150;
        this.maxLives = 20;
        this._lives = this.maxLives;
        this.speed = 0;
        this._timeBetweenShot = Utils.randomNumber(2500, 5000);
        this.avatarImagePath = "avatar_OZMEN";

        this._startAnimation();
        this._updateHealthBar();
    }

    init() {
        this.board = GraphicsHelper.createSprite({
            name: "boss_board_2",
            x: -80,
            y: +10,
        });
        this.board.setParent(this.container);
        this.board.scale.set(1.3);

        this.sprite = GraphicsHelper.createSprite({
            name: "MainBossOzmen",
            x: -50,
            y: -150,
            width: 200,
            height: 208,
        });

        this.healthBar = GraphicsHelper.fillRect({
            width: this.healthWidth,
            height: 8,
            alpha: 0.8,
            color: 0xff4c21,
        });
        this.healthBar.y = -165;
        this.healthBar.x = -20;
        this.healthBar.setParent(this.container);

        this._spriteText = Utils.drawText({
            parent: this.container,
            text: `OZMEN`,
            x: 50,
            y: 120,
            style: STYLES.miniBoss,
        });
    }

    _startAnimation() {
        const base_x = this.container.x;

        this._animationTween = new TWEEN.Tween(this.container)
            .to({ x: [base_x + 30, base_x, base_x - 30, base_x] }, 7000)
            .repeat(Infinity)
            .start();
    }

    _shoot(delta) {
        this._timeBetweenShot -= delta;

        if (this._timeBetweenShot <= 0) {
            const { x: base_x, y: base_y } = this.container;
            const { width, height, x, y } = this.sprite;

            // create bullet
            const bulletX = base_x + x + width / 2;
            const bulletY = base_y + height;
            gameManager.registerBullet(new OzmenDefaultBullet(bulletX, bulletY - this.sprite.height, -1, this));

            this._timeBetweenShot = Utils.randomNumber(1000, 2500);
        }
    }
}
