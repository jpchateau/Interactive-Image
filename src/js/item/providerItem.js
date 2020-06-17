import AbstractItem from "./abstractItem";
import DomHelper from "../helper/domHelper";

/**
 * @extends AbstractItem
 */
export default class ProviderItem extends AbstractItem {
    /**
     * @returns {string[]}
     */
    static supportedProviders() {
        return Object.keys(ProviderItem.providersUrls());
    }

    /**
     * @returns {{dailymotion: string, vimeo: string, youtube: string}}
     */
    static providersUrls() {
        return {
            'dailymotion': 'https://www.dailymotion.com/embed/video/',
            'vimeo': 'https://player.vimeo.com/video/',
            'youtube': 'https://www.youtube.com/embed/'
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

        if (ProviderItem.supportedProviders().indexOf(this.providerName) === -1) {
            throw Error('Unsupported provider "' + this.providerName + '"');
        }
    }

    /**
     * @returns {HTMLElement}
     */
    createIframe() {
        return DomHelper.createElement(
            'iframe',
            {
                'frameborder': '0',
                'src': ProviderItem.providersUrls()[this.providerName] + this.parameters.videoId + (this.providerName === 'youtube' ? '?origin=' + ProviderItem.guessOrigin() : '')
            }
        );
    }

    /**
     * @returns {HTMLElement}
     */
    renderHtml() {
        const element = this.createItemElement();
        const providerItem = DomHelper.createElement('div', {'class': 'provider-item'});

        providerItem.appendChild(this.createIframe());
        element.appendChild(providerItem);

        return element;
    }

    /**
     * @returns {string}
     */
    static guessOrigin() {
        let urlSplit = window.location.href.split("/");

        return urlSplit[0] + "//" + urlSplit[2];
    }
}
