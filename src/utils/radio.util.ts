import {
    browser,
    by,
    element,
    ElementArrayFinder,
    WebElement
} from "protractor";

export class RadioUtil {

    static async getFirstSelected(webElements: ElementArrayFinder) {

        await this.valid(webElements);

        let elements = await webElements.getWebElements();

        for (let element of elements) {

            console.log(await element.getText());

            if (await element.isSelected()) {
                return element;
            }

        }

        throw new RadioError('No radio selected');

    }

    static async valid(webElements: ElementArrayFinder) {

        let elements = await webElements.getWebElements();

        for (let element of elements) {

            let type = await element.getAttribute("type");

            if (null == type || "radio" !== type) {
                throw new RadioError('No radio');
            }
        }

    };

}

export class RadioError extends Error {

}