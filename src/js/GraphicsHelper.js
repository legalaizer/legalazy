import * as PIXI from "pixi.js";
import IMAGES from "@images";

export default class GraphicsHelper {
    static createContainer(settings = {}) {
        const { x = 0, y = 0, width = 0, height = 0 } = settings;

        const container = new PIXI.Container();
        container.x = x;
        container.y = y;
        container.width = width;
        container.height = height;

        return container;
    }

    static createSprite(settings) {
        const { name, x = 0, y = 0, onClick } = settings;

        const base64source = IMAGES[name];
        const texture = PIXI.Texture.fromLoader(base64source);
        const sprite = new PIXI.Sprite(texture);

        sprite.x = x;
        sprite.y = y;

        if (onClick) {
            sprite.buttonMode = true;
            sprite.interactive = true;
            sprite.on("pointerdown", onClick);
        }

        return sprite;
    }

    static drawGrid(settings) {
        const { size, capacity = 10, color = 0x00ff00, alpha = 1 } = settings;
        var graphics = new PIXI.Graphics();
        graphics.lineStyle(1, color, alpha);

        var cellSize = size / capacity;

        [...Array(capacity).keys()].map(x => {
            [...Array(capacity).keys()].map(y => {
                graphics.drawRect(cellSize * x, cellSize * y, cellSize, cellSize);
            });
        });

        return graphics;
    }

    static drawRect(settings) {
        const { x = 0, y = 0, width, height, color = 0x00ff00, alpha = 1 } = settings;
        const graphics = new PIXI.Graphics();

        graphics.lineStyle(1, color, alpha);
        graphics.drawRect(x, y, width, height);

        return graphics;
    }

    static fillRect(settings) {
        const { x = 0, y = 0, width, height, color = 0x00ff00, alpha = 1 } = settings;
        const graphics = new PIXI.Graphics();

        graphics.beginFill(color, alpha);
        graphics.drawRect(x, y, width, height);
        graphics.endFill();

        return graphics;
    }
}
