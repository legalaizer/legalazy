import starter from "./Starter";
import SETTINGS from "./settings.js";
import Utils from "./utils.js";
import STYLES from "./styles.js";
import GraphicsHelper from "./GraphicsHelper";
import TWEEN from "tween.js";

export default class ScoreBar {
    constructor() {
        this._container = null;
        this._scoreText = null;
        this._substrate = null;

        this._score = 0;

        starter.initiated.then(() => {
            this._init();
            this._startAnimation();
        });
    }

    _init() {
        this._container = Utils.createContainer({
            parent: starter.field,
            x: -(SETTINGS.appSizes.width / 2) + 70,
            y: -(SETTINGS.appSizes.height / 2) + 10,
            interactive: false,
            w: 0,
            h: 0,
        });

        this._substrate = GraphicsHelper.createSprite({
            name: "score_substrate",
            x: 0,
            y: 0,
        });

        this._substrate.scale.set(0.6);
        this._substrate.anchor.set(0.5, 0);
        this._substrate.setParent(this._container);

        this._scoreText = Utils.drawText({
            parent: this._substrate,
            text: this._score,
            x: 0,
            y: this._substrate.height / 2 + 50,
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

    update(val) {
        this._score += val;
        this._scoreText.text = this._score;
    }

    reset() {
        this._score = 0;
        this._scoreText.text = this._score;
    }
}

//TODO Вынести очки куда-то в настройки, так как за всех врагов будут разные очки и боссов!
