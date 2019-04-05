import BaseItem from "./baseItem";

/**
 * @extends BaseItem
 */
export default class ProviderItem extends BaseItem {
    static providersUrls() {
        return {
            'youtube': 'https://www.youtube.com/embed/',
            'dailymotion': 'https://www.dailymotion.com/embed/video/'
        };
    }

    /**
     * @param {object} parameters
     */
    constructor(parameters) {
        super(parameters);

        this.checkRequiredParameters(parameters, ['providerName', 'parameters']);

        this.providerName = parameters.providerName.toLowerCase();
        this.parameters = parameters.parameters;

        if (!ProviderItem.providersUrls().hasOwnProperty(this.providerName)) {
            throw Error('Unsupported provider "' + this.providerName + '"');
        }
    }

    /**
     * @returns {HTMLElement}
     */
    createIframe() {
        return this.domHelper.createElement(
            'iframe',
            {
                'frameborder': '0',
                'src': ProviderItem.providersUrls()[this.providerName] + this.parameters.videoId
            }
        );
    }

    /**
     * @returns {HTMLElement}
     */
    renderHtml() {
        const element = this.createItemElement();
        const providerItem = this.domHelper.createElement('div', {'class': 'provider-item'});

        providerItem.appendChild(this.createIframe());

        element.appendChild(providerItem);

        return element;
    }
}