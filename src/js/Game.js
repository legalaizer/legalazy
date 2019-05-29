import Player from "./Player.js";
import ControlPanel from "./ControlPanel.js";
import SETTINGS from "./settings.js";
import levelManager from "./LevelManager.js";
import { gameManager } from "./Manager.js";
import sceneManager from "./scenes/SceneManager.js";
import GamePauseScene from "./scenes/GamePauseScene.js";
import RestartScene from "./scenes/RestartScene.js";
import StarScene from "./scenes/StarScene.js";
import starter from "./Starter.js";

class Game {
    constructor() {
        levelManager.restart();

        this.controlPanel = new ControlPanel();

        sceneManager.registerScene("pause", new GamePauseScene());
        sceneManager.registerScene("restart", new RestartScene());
        sceneManager.registerScene("startGame", new StarScene());

        sceneManager.showScene("startGame");
    }
}

export default Game;
