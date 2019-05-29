import * as PIXI from "pixi.js";
import TWEEN from "tween.js";
import SETTINGS from "./settings.js";
import Utils from "./utils.js";

class Starter {
    constructor() {
        // pixi app
        this.app = null;

        this._paused = false;
        // this.isDeveloperMode = true;

        this._init = {};
        this._init.initPromise = new Promise(resolve => {
            this._init.setInitiated = resolve;
        });

        this.size = {
            width: SETTINGS.appSizes.width,
            height: SETTINGS.appSizes.height,
        };
    }

    pause() {
        if (this._paused) {
            this.ticker.start();
        } else {
            this.ticker.stop();
        }
        this._paused = !this._paused;
    }

    init(container = document.body) {
        const { width, height } = this.size;

        this.app = new PIXI.Application({
            width,
            height,
            transparent: true,
        });
        container.appendChild(this.app.view);

        this.field = Utils.drawSvgSprite({
            parent: this.app.stage,
            name: "bg_1",
            width: SETTINGS.appSizes.width,
            height: SETTINGS.appSizes.height,
            x: SETTINGS.appSizes.width / 2,
            y: SETTINGS.appSizes.height / 2,
            anchor: 0.5,
        });
        this.field.interactive = true;

        this.ticker = new PIXI.Ticker();
        this.ticker.start();

        this.ticker.add(() => {
            TWEEN.update();
        });

        this._init.setInitiated();

        return this._init.initPromise;
    }

    get initiated() {
        return this._init.initPromise;
    }

    registerTick(action) {
        if (Utils.isFunction(action)) {
            return this.initiated.then(() => {
                const delta = this.app.ticker.deltaMS;
                const wrap = () => {
                    action(delta);
                };

                this.ticker.add(wrap);
                return wrap;
            });
        }
        return Promise.reject();
    }

    unregisterTick(action) {
        if (Utils.isFunction(action)) {
            this.ticker.remove(action);
        }
    }
}

const starter = new Starter();

export default starter;
