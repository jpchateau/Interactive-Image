export default class Resizer {
    /**
     * @param {Behavior} behavior
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
        let that = this;

        let enableEffects = () => {
            if (window.innerWidth <= 320) {
                that.disable();

                return;
            }

            that.enable();
        };

        $(window).on('resize', function() {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(enableEffects, 250);
        });
    }
}
