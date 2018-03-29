import {
    browser,
    by,
    element,
    WebElementPromise,
    WebElement
} from "protractor";

export class SelectUtil {

    static async getFirstSelectedOption(webElement: WebElementPromise) {

        await this.valid(webElement);

        let options = await webElement.findElements(by.tagName("option"));

        for (let option of options) {

            if (await option.isSelected()) {
                return option;
            }

        }

        throw new Error('No options are selected');

    }

    static async valid(webElement: WebElementPromise) {

        let tagName = await webElement.getTagName();

        if (null == tagName || "select" !== tagName) {
            throw new Error('No select');
        }

    };

}