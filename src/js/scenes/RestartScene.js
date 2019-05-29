import starter from "../Starter";
import Utils from "../utils.js";
import SETTINGS from "../settings.js";
import * as PIXI from "pixi.js";
import levelManager from "../LevelManager.js";

export default class RestartScene {
    constructor() {
        const container = new PIXI.Container();
        starter.app.stage.addChild(container);

        container.x = SETTINGS.appSizes.width / 2;
        container.y = SETTINGS.appSizes.height / 2;

        // Center bunny sprite in local container coordinates
        container.pivot.x = container.width / 2;
        container.pivot.y = container.height / 2;

        this.container = container;

        this.init();
    }

    init() {
        this.background = Utils.drawSvgSprite({
            parent: starter.app.stage,
            name: "bg_1",
            width: SETTINGS.appSizes.width,
            height: SETTINGS.appSizes.height,
            x: SETTINGS.appSizes.width / 2,
            y: SETTINGS.appSizes.height / 2,
            anchor: 0.5,
        });

        this.playButton = Utils.drawSvgSprite({
            parent: this.background,
            name: "restart",
            width: 100,
            height: 100,
            anchor: 0.5,
            x: 0,
            y: 0,
            onClick: () => {
                this.hide();
                levelManager.restart();
                starter.pause();
            },
        });

        this._scoreText = Utils.drawText({
            parent: this.background,
            text: "Restart game ?",
            x: 0,
            y: 60,
            style: {
                align: "center",
                dropShadow: true,
                dropShadowAngle: 0.4,
                dropShadowColor: "#0d1144",
                dropShadowDistance: 2,
                fill: "#857833",
                fillGradientStops: [1],
                fontFamily: "Comic Sans MS",
                fontSize: 20,
                fontWeight: 900,
                letterSpacing: 2,
                lineJoin: "round",
                miterLimit: 5,
                padding: 4,
                stroke: "#f64949",
                strokeThickness: 2,
                whiteSpace: "normal",
            },
        });

        this.playButton.buttonMode = true;

        this.hide();
    }

    show() {
        starter.pause();
        starter.field.visible = false;
        this.background.visible = true;
    }

    hide() {
        starter.field.visible = true;
        this.background.visible = false;
    }
}
