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
            'dailymotion': 'https://www.dailymotion.com/embed/video/%id%',
            'soundcloud': 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/%id%&color=%2326203e&auto_play=false&hide_related=false&sharing=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=true',
            'vimeo': 'https://player.vimeo.com/video/%id%',
            'youtube': 'https://www.youtube.com/embed/%id%?origin=' + ProviderItem.guessOrigin()
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
        let id = this.parameters.videoId ?? this.parameters.soundId;

        return DomHelper.createElement(
            'iframe',
            {
                'loading': 'lazy',
                'src': ProviderItem.providersUrls()[this.providerName].replace('%id%', id)
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
