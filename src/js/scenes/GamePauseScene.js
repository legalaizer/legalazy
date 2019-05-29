import starter from "../Starter";
import Utils from "../utils.js";
import SETTINGS from "../settings.js";

export default class GamePauseScene {
    constructor() {
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
            name: "play",
            width: 100,
            height: 100,
            anchor: 0.5,
            x: 0,
            y: 0,
            onClick: () => {
                this.hide();
                starter.pause();
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
