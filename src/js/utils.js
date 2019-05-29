import * as PIXI from "pixi.js";
import IMAGES from "@images";

class Utils {
    static drawSvgSprite(settings) {
        const { name, text, width, height, x, y, parent, onClick, styles, anchor, alpha } = settings;
        const base64source = IMAGES[name];
        const texture = PIXI.Texture.fromLoader(base64source);

        const sprite = new PIXI.Sprite(texture);
        width && (sprite.width = width);
        height && (sprite.height = height);
        sprite.x = x;
        sprite.y = y;
        sprite.anchor.set(anchor || 0);
        parent.addChild(sprite);

        sprite.alpha = alpha || 1;

        if (text && width && height) {
            const txt = new PIXI.Text(text, styles);
            txt.x = sprite.width / 2;
            txt.y = sprite.height / 2;
            txt.anchor.set(0.5);
            sprite.addChild(txt);
        }

        if (onClick) {
            sprite.interactive = true;
            sprite.on("pointerdown", onClick);
        }

        return sprite;
    }

    static drawText(settings) {
        const { text, x, y, color, parent, style } = settings;
        const txt = new PIXI.Text(text, style);
        txt.x = x;
        txt.y = y;
        txt.anchor.set(0.5);
        return parent.addChild(txt);
    }

    static drawGraphics(parent, setting) {
        const graphics = new PIXI.Graphics();

        graphics.beginFill(setting.color, setting.alpha);
        graphics.drawRoundedRect(setting.x, setting.y, setting.w, setting.h, setting.rounded);
        graphics.endFill();

        if (parent) {
            parent.addChild(graphics);
        }

        return graphics;
    }

    static drawRoundedEmptyGraphic(settings) {
        const {
            x,
            y,
            lineColor,
            parent,
            width,
            height,
            rounded,
            lineWidth,
            fillAlpha,
            fillColor,
            text,
            style,
        } = settings;

        const graphics = new PIXI.Graphics();

        graphics.lineStyle(lineWidth, lineColor, 1);
        graphics.beginFill(fillColor || 0x000000, fillAlpha);
        graphics.drawRoundedRect(x, y, width, height, rounded);
        graphics.endFill();

        parent.addChild(graphics);

        if (text) {
            Utils.drawText({
                parent: graphics,
                text,
                x: x + width / 2,
                y: y + height / 2,
                style: style,
            });
        }

        return graphics;
    }

    static createContainer(settings) {
        const menuIconContainer = new PIXI.Container();
        menuIconContainer.x = settings.x;
        menuIconContainer.y = settings.y;
        menuIconContainer.interactive = settings.isInteractive;
        settings.w && (menuIconContainer.width = settings.w);
        settings.h && (menuIconContainer.height = settings.h);

        if (settings.cb) {
            menuIconContainer.interactive = true;
            menuIconContainer.on("pointerdown", settings.cb);
        }

        settings.parent.addChild(menuIconContainer);

        return menuIconContainer;
    }

    static isFunction(target) {
        return typeof target === "function";
    }

    static randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    static getGuid() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
            var r = (Math.random() * 16) | 0,
                v = c == "x" ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    }
}

export default Utils;
