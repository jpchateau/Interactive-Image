export default class EventManager {
    constructor(element) {
        this.element = element;
        this.events = [];
    }

    on(type, handler, options) {
        this.element.addEventListener(type, handler, options);
        this.events.push({ type, handler, options });
    }

    offAll() {
        this.events.forEach(({ type, handler, options }) => {
            this.element.removeEventListener(type, handler, options);
        });
        this.events = [];
    }
}
