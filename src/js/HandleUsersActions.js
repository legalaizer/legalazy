import starter from "./Starter";

class HandleUsersActions {
    constructor() {
        this.cursorPosition = { x: 0, y: 0 };

        starter.initiated.then(() => {
            starter.field.on("pointermove", e => this.onPointerMove(e));
        });
    }

    onPointerMove(event) {
        const location = event.data.getLocalPosition(starter.field);
        this.cursorPosition.x = location.x;
        this.cursorPosition.y = location.y;
    }
}

export default new HandleUsersActions();
