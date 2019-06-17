export default class Resizer {
    /**
     * @param {Behavior} behavior
     */
    constructor(behavior) {
        this.behavior = behavior;
    }

    bind() {
        let resizeTimer;
        let that = this;

        let enableEffects = () => {
            if (window.innerWidth <= 320) {
                if (that.behavior.enabled === true) {
                    that.behavior.unbindAll();
                }
            } else {
                if (that.behavior.enabled === false) {
                    that.behavior.bindAll();
                }
            }
        };

        $(window).on('resize', function() {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(enableEffects, 250);
        });
    }
}
