import starter from "../Starter";
import Utils from "../utils.js";
import SETTINGS from "../settings.js";
import { gameManager } from "../Manager.js";
import Player from "../Player.js";
import GraphicsHelper from "../GraphicsHelper";
import STYLES from "../styles";

export default class StarScene {
    constructor() {
        this._container = null;
        this._background = null;
        this._playButton = null;
        this._leftArrow = null;
        this._rightArrow = null;
        this._activePlayer = null;
        this._internetKrokodil = null;
        this._gerard = null;
        this._oldSchoolBro = null;

        this._currentPlayer = 0;
        this.names = ["InternetKrokodil", "OldSchool bro", "Жерард"];
        this.players = [];

        this._init();
        this.addAnimations();
    }

    _init() {
        this._container = GraphicsHelper.createContainer({
            x: SETTINGS.appSizes.width / 2,
            y: SETTINGS.appSizes.height / 2,
        });

        starter.app.stage.addChild(this._container);

        this._background = GraphicsHelper.createSprite({
            name: "bg_2",
            x: -SETTINGS.appSizes.width / 2,
            y: -SETTINGS.appSizes.height / 2,
            width: SETTINGS.appSizes.width,
            height: SETTINGS.appSizes.height,
        });

        this._background.setParent(this._container);

        this.name = Utils.drawText({
            text: "LEGALAXY",
            x: 0,
            y: -280,
            color: 0xff43c3,
            parent: this._container,
            style: STYLES.logo,
        });

        this._leftArrow = GraphicsHelper.createSprite({
            name: "left_arrow",
            x: -400,
            y: -100,
            width: 200,
            height: 112,
            onClick: () => {
                this.changePlayer(1);
            },
        });

        this._leftArrow.buttonMode = true;
        this._leftArrow.setParent(this._container);

        this._rightArrow = GraphicsHelper.createSprite({
            name: "right_arrow",
            x: 200,
            y: -100,
            width: 200,
            height: 112,
            onClick: () => {
                this.changePlayer(-1);
            },
        });

        this._rightArrow.buttonMode = true;
        this._rightArrow.setParent(this._container);

        const currentPlayer = ["InternetKrokodil", "OldSchoolBro", "Gerard"];

        this._playButton = Utils.drawSvgSprite({
            parent: this._container,
            name: "play",
            width: 100,
            height: 100,
            anchor: 0.5,
            x: 0,
            y: 180,
            onClick: () => {
                gameManager.registerPlayer(
                    new Player(0, SETTINGS.appSizes.height / 2 - 75, currentPlayer[this._currentPlayer])
                );

                this.hide();
                starter.pause();
            },
        });

        this._playButton.buttonMode = true;
        this.initialPlayers();
    }

    changePlayer(dir) {
        this._currentPlayer += dir;
        if (this._currentPlayer > 2) {
            this._currentPlayer = 0;
        }

        if (this._currentPlayer < 0) {
            this._currentPlayer = 2;
        }

        this._activePlayer.alpha = 0;
        this._activePlayer = this.players[this._currentPlayer];
        this._activePlayer.alpha = 1;

        this.updatePlayerName();
    }

    initialPlayers() {
        this._internetKrokodil = GraphicsHelper.createSprite({
            name: "InternetKrokodilPreview",
            x: 0,
            y: -50,
            width: 150,
            height: 205,
        });

        this._internetKrokodil.anchor.set(0.5);
        this._internetKrokodil.setParent(this._container);
        this._activePlayer = this._internetKrokodil;

        this.players.push(this._internetKrokodil);

        this._oldSchoolBro = GraphicsHelper.createSprite({
            name: "OldSchoolBroPreview",
            x: 0,
            y: -50,
            width: 150,
            height: 205,
        });

        this._oldSchoolBro.anchor.set(0.5);
        this._oldSchoolBro.alpha = 0;
        this._oldSchoolBro.setParent(this._container);
        this.players.push(this._oldSchoolBro);

        this.gerard = GraphicsHelper.createSprite({
            name: "GerardPreview",
            x: 0,
            y: -50,
            width: 150,
            height: 205,
        });

        this.gerard.anchor.set(0.5);
        this.gerard.alpha = 0;
        this.gerard.setParent(this._container);
        this.players.push(this.gerard);

        this.name = Utils.drawText({
            text: this.names[this._currentPlayer],
            x: 0,
            y: 80,
            color: 0xff43c3,
            parent: this._container,
            style: STYLES.IntroPlayerName,
        });

        this.updatePlayerName();
    }

    updatePlayerName() {
        this.name.text = this.names[this._currentPlayer];
    }

    addAnimations() {}

    show() {
        starter.pause();
        starter.field.visible = false;
        this._container.visible = true;
    }

    hide() {
        starter.field.visible = true;
        this._container.visible = false;
    }
}
