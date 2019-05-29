import IMAGES from "@images";
import * as PIXI from "pixi.js";
import starter from "./Starter";

export default class Explosion {
    constructor() {}

    animate(alias, x, y, speed) {
        const textures = Explosion._textures;
        if (!textures[alias]) {
            const [prefix, from, to] = alias.split(/[:(?:\.\.)]+/);

            textures[alias] = [];
            for (var i = from; i <= to; i++) textures[alias].push(PIXI.Texture.fromLoader(IMAGES[`${prefix}${i}`]));
        }

        let animatedSprite = new PIXI.AnimatedSprite(textures[alias]);

        animatedSprite.anchor.set(0.5, 0.5);
        animatedSprite.x = x;
        animatedSprite.y = y;
        animatedSprite.animationSpeed = speed || 0.2;
        animatedSprite.loop = false;
        animatedSprite.onComplete = () => {
            animatedSprite.stop();
            starter.field.removeChild(animatedSprite);
            animatedSprite.destroy();
        };

        starter.field.addChild(animatedSprite);
        animatedSprite.play();
    }
}

Explosion._textures = {};
