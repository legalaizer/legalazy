import starter from "./Starter.js";
import SETTINGS from "./settings.js";
import sceneManager from "./scenes/SceneManager.js";
import GraphicsHelper from "./GraphicsHelper";

class ControlPanel {
    constructor() {
        this._container = null;
        this._pauseButton = null;
        this._restartButton = null;

        this._init();
    }

    _init() {
        this._container = GraphicsHelper.createContainer({ x: 0, y: SETTINGS.appSizes.height / 2 - 30 });
        starter.field.addChild(this._container);

        this._pauseButton = GraphicsHelper.createSprite({
            name: "pause",
            x: -(SETTINGS.appSizes.width / 2) + 50,
            y: -10,
            onClick: () => {
                sceneManager.showScene("pause");
            },
        });

        this._pauseButton.buttonMode = true;
        this._pauseButton.anchor.set(0.5);
        this._pauseButton.scale.set(0.6);
        this._pauseButton.setParent(this._container);

        this._restartButton = GraphicsHelper.createSprite({
            name: "restart",
            x: -(SETTINGS.appSizes.width / 2) + 115,
            y: -10,
            onClick: () => {
                sceneManager.showScene("pause");
            },
        });

        this._restartButton.buttonMode = true;
        this._restartButton.anchor.set(0.5);
        this._restartButton.scale.set(0.6);
        this._restartButton.setParent(this._container);
    }
}

export default ControlPanel;
