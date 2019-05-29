import starter from "./Starter";
import Utils from "./utils.js";
import STYLES from "./styles.js";
import GraphicsHelper from "./GraphicsHelper";
import TWEEN from "tween.js";
import SETTINGS from "./settings.js";

class Lives {
    constructor(x, y) {
        this.lives = 3;

        this._container = null;
        this._substrate = null;
        this._sprite = null;
        this._spriteText = null;

        this._heartTweenDecrease = null;
        this._heartTweenIncrease = null;
        this._text = `x`;

        starter.initiated.then(() => {
            this._init(x, y);
            this._startAnimation();
        });
    }

    _init(x, y) {
        this._container = GraphicsHelper.createContainer({
            x: SETTINGS.appSizes.width / 2 - 70,
            y: -(SETTINGS.appSizes.height / 2),
        });

        starter.field.addChild(this._container);

        this._substrate = GraphicsHelper.createSprite({
            name: "lives_substrate",
            x: 0,
            y: 10,
        });

        this._substrate.scale.set(0.6);
        this._substrate.anchor.set(0.5, 0);
        this._substrate.setParent(this._container);

        this._sprite = GraphicsHelper.createSprite({
            name: "live",
            x: -60,
            y: 90,
        });

        this._sprite.setParent(this._substrate);

        this._spriteText = Utils.drawText({
            parent: this._substrate,
            text: `${this._text} ${this.lives}`,
            x: 30,
            y: 110,
            style: STYLES.score,
        });
    }

    _startAnimation() {
        this._rotationTween = new TWEEN.Tween(this._substrate)
            .to({ rotation: [-0.1, 0, 0.1, 0] }, 5000)
            .yoyo(false)
            .repeat(Infinity)
            .start();
    }

    set increaseLive(val) {
        this.lives += val;
        this._spriteText.text = `${this._text} ${this.lives}`;
    }

    set decreaseLive(val) {
        if (this.lives < 0) {
            // this.emit('end game');
            return;
        }

        this.lives -= val;
        this._spriteText.text = `${this._text} ${this.lives}`;
    }

    showDecrease() {
        this._spriteDuplicate.alpha = 1;
        this._heartTweenDecrease = new TWEEN.Tween(this._spriteDuplicate.pivot)
            .to({ y: 550 }, 1000)
            .yoyo(false)
            .easing(TWEEN.Easing.Quadratic.Out)
            .onUpdate(k => {
                this._spriteDuplicate.alpha = 1 - k;
            })
            .start();
    }

    showIncrease() {
        this._spriteDuplicate.alpha = 1;
        const sizes = {
            x: [1, 1.2, 1],
            y: [1, 1.2, 1],
        };

        this._heartTweenIncrease = new TWEEN.Tween(this._spriteDuplicate.scale)
            .to({ x: sizes.x, y: sizes.y }, 300)
            .yoyo(false)
            .easing(TWEEN.Easing.Quadratic.Out)
            .onComplete(() => {
                this._spriteDuplicate.alpha = 0;
            })
            .start();
    }
}

export default Lives;
