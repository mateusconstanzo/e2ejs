import {
    ElementArrayFinder,
    WebElement
} from "protractor";

export class RadioError extends Error {

}

export class RadioUtil {

    static async getFirstSelected(webElements: ElementArrayFinder): Promise<WebElement> {

        await this.valid(webElements);

        const elements = await webElements.getWebElements();

        for (const element of elements) {

            if (await element.isSelected()) {
                return element;
            }

        }

        throw new RadioError('No radio selected');

    }

    static async valid(webElements: ElementArrayFinder) {

        const elements = await webElements.getWebElements();

        for (const element of elements) {

            const type = await element.getAttribute("type");

            if (null === type || "radio" !== type) {
                throw new RadioError('No radio');
            }
        }

    };

}