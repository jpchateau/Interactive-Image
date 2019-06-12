import BaseItem from "./baseItem";
import DomHelper from "../helper/domHelper";

/**
 * @extends BaseItem
 */
export default class ProviderItem extends BaseItem {
    /**
     * @returns {string[]}
     */
    static supportedProviders() {
        return ['youtube', 'dailymotion'];
    }

    /**
     * @returns {{youtube: string, dailymotion: string}}
     */
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
