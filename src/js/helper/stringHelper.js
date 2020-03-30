export default class StringHelper {
    static param(parameters) {
        const urlParams = new URLSearchParams(Object.entries(parameters));

        return urlParams.toString();
    }
}
