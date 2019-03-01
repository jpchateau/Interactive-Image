import Hover from "./hover";

export default class Resizer {
    /**
     * @param {Hover} hover
     */
    constructor(hover) {
        this.hover = hover;
    }

    bind() {
        let resizeTimer;
        let that = this;

        let enableEffects = () => {
            if (window.innerWidth <= 320) {
                if (that.hover.enabled === true) {
                    that.hover.unbindAll();
                }
            } else {
                if (that.hover.enabled === false) {
                    that.hover.bindAll();
                }
            }
        };

        $(window).on('resize', function() {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(enableEffects, 250);
        });
    }
}
