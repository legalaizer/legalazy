import starter from "./Starter";
import GraphicsHelper from "./GraphicsHelper";
import TWEEN from "tween.js";

class Money {
    constructor(x, y) {
        this._sprite = null;
        this._coinTween = null;

        starter.initiated.then(() => {
            this._init(x, y);
        });
    }

    _init(x, y) {
        this._sprite = GraphicsHelper.createSprite({
            name: "coin",
            x,
            y,
        });
        this._sprite.setParent(starter.field);
        this._sprite.anchor.set(0.5);

        this._animate();
    }

    get positionInfo() {
        return {
            x: this._sprite.x,
            y: this._sprite.y,
        };
    }

    _destroy() {
        starter.field.removeChild(this._sprite);
        this._sprite.destroy();
        this._sprite = null;
        TWEEN.remove(this._coinTween);
        TWEEN.remove(this.rotateCoinTween);
        this._coinTween = null;
        this.rotateCoinTween = null;
    }

    _animate() {
        const y = this.positionInfo.y;

        this._coinTween = new TWEEN.Tween(this._sprite)
            .to({ y: this._sprite.y - 150 }, 1600)
            .yoyo(false)
            .easing(TWEEN.Easing.Quadratic.Out)
            .onUpdate(k => {
                this._sprite.alpha = 1 - k;
            })
            .start();

        const endWidth = this._sprite.width;

        this.rotateCoinTween = new TWEEN.Tween(this._sprite)
            .to({ width: [0, endWidth] }, 400)
            .repeat(4)
            .onComplete(() => {
                this._destroy();
            })
            .start();
    }
}

export default Money;
