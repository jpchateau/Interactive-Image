export default class Resizer {
    /**
     * @returns {{"smartphones-portrait": number}}
     */
    static breakpoints() {
        return {
            'smartphones-portrait': 320,
        };
    }

    /**
     * @param {Behavior} behavior - Behavior instance.
     */
    constructor(behavior) {
        this.behavior = behavior;
    }

    enable() {
        if (this.behavior.enabled === false) {
            this.behavior.bindAll();
        }
    }

    disable() {
        if (this.behavior.enabled === true) {
            this.behavior.unbindAll();
        }
    }

    bind() {
        let resizeTimer;
        const that = this;

        const enableEffects = () => {
            if (window.innerWidth <= Resizer.breakpoints()['smartphones-portrait']) {
                that.disable();

                return;
            }

            that.enable();
        };

        window.addEventListener('resize', () => {
            window.clearTimeout(resizeTimer);
            resizeTimer = window.setTimeout(enableEffects, 300);
        });
    }
}
