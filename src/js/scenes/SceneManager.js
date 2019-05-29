class SceneManager {
    constructor() {
        this._scenes = {};
        this._activeScene = null;
    }

    showScene(name) {
        if (this._activeScene !== null && this._scenes[name] === this._activeScene) {
            console.info(`Scene ${name} is already displaying`);
        }

        if (this._scenes.hasOwnProperty(name)) {
            if (this._activeScene !== null) {
                this._activeScene.hide();
            }

            this._scenes[name].show();
            this._activeScene = this._scenes[name];
        } else {
            console.error(`Scene ${name} is not found`);
        }
    }

    registerScene(name, scene) {
        this._scenes[name] = scene;
    }
}

export default new SceneManager();
