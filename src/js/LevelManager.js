import starter from "./Starter.js";
import levelSettings from "./settings/levelSettings.js";
import {
    Enemy,
    EnemyEasyLevel,
    EnemyMediumLevel,
    TrapDillerMediumBoss,
    LiunkMediumBoss,
    OzmenHardBoss,
} from "./Enemy.js";
import { gameManager } from "./Manager.js";
import ScoreBar from "./ScoreBar.js";
import sceneManager from "./scenes/SceneManager.js";
import GraphicsHelper from "./GraphicsHelper";
import Utils from "./utils.js";
import STYLES from "./styles.js";
import SETTINGS from "./settings.js";

const ENEMY_BY_ID = {
    1: EnemyEasyLevel,
    2: EnemyMediumLevel,
    50: TrapDillerMediumBoss,
    51: LiunkMediumBoss,
    70: OzmenHardBoss,
};

class LevelManager {
    constructor() {
        this.level = 0;
        this.money = 0;

        this._spriteText = null;

        starter.registerTick(d => {
            this.tick(d);
        });

        this.scoreBar = new ScoreBar();

        gameManager.on("updateScore", data => {
            switch (data.action) {
                case "enemy:destroy": {
                    // TODO: use different value depending on data.info
                    console.log(data);
                    this.scoreBar.update(100);
                    this.increaseMoney = data.price;

                    break;
                }
                default:
                    console.info(`Cannot update score due to unknown action '${data.action}'`);
            }
        });

        this.avatars = [];
        this.container = GraphicsHelper.createContainer({
            x: SETTINGS.appSizes.width / 2 - 200,
            y: SETTINGS.appSizes.height / 2 - 70,
        });

        starter.initiated.then(() => {
            starter.field.addChild(this.container);

            this._spriteText = Utils.drawText({
                parent: starter.field,
                text: `$ ${this.money}`,
                x: -SETTINGS.appSizes.width / 2 + 200,
                y: SETTINGS.appSizes.height / 2 - 40,
                style: STYLES.score,
            });
        });
    }

    setEnemy(settings) {
        const { id } = settings;
        const enemyClass = ENEMY_BY_ID[id] || ENEMY_BY_ID[1];

        return new enemyClass(settings);
    }

    _setEnemyName(obj) {
        if (obj.avatarImagePath) {
            const avatar = GraphicsHelper.createSprite({
                name: obj.avatarImagePath,
                x: 0,
                y: 0,
            });
            avatar.setParent(this.container);
            avatar.scale.set(0.4);
            avatar.alpha = 0;

            this.avatars.push(avatar);
        }

        let xPosition = 0;
        this.avatars.forEach(el => {
            el.x = xPosition;
            el.alpha = 1;
            xPosition += 70;
        });
    }

    set increaseMoney(val) {
        this.money += val;
        this._spriteText.text = `$ ${this.money}`;
    }

    set decreaseMoney(val) {
        if (this.money < 0) {
            return;
        }

        this.money -= val;
        this._spriteText.text = `$ ${this.money}`;
    }

    restart() {
        this.scoreBar.reset();
        gameManager.reset();
        // this.level = 0;
        this._changeLevel();
    }

    _changeLevel() {
        this.level += 1;
        this._initEnemies();
    }

    _checkLevelChange() {
        if (!gameManager.enemiesExist) {
            this._changeLevel();
        }
    }

    _initEnemies() {
        if (!levelSettings[this.level]) {
            console.log(`You don't have map`);
            return;
        }

        let y = -180;

        for (let i = 0; i < levelSettings[this.level].length; i++) {
            const step = SETTINGS.appSizes.width / levelSettings[this.level][i].length;
            const x = -(SETTINGS.appSizes.width / 2);

            for (let j = 0; j < levelSettings[this.level][i].length; j++) {
                if (levelSettings[this.level][i][j] === 0) {
                    continue;
                }

                const enemy = this.setEnemy({
                    x: x + step * j + 20,
                    y: y,
                    step: step,
                    id: levelSettings[this.level][i][j],
                });

                this._setEnemyName(enemy);

                gameManager.registerEnemy(enemy);
            }
            y -= 75;
        }
    }

    tick(delta) {
        // check GAME OVER
        if (!gameManager.playerExists) {
            sceneManager.showScene("restart");
            return;
        }

        this._checkLevelChange();
    }
}

export default new LevelManager();
