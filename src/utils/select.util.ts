import {
    by,
    WebElementPromise,
    WebElement
} from "protractor";

export class SelectError extends Error {

}

export class SelectUtil {

    static async getFirstSelectedOption(webElement: WebElementPromise): Promise<WebElement> {

        await this.valid(webElement);

        const options = await webElement.findElements(by.tagName("option"));

        for (const option of options) {

            if (await option.isSelected()) {
                return option;
            }

        }

        throw new SelectError('No options are selected');

    }

    static async valid(webElement: WebElementPromise) {

        const tagName = await webElement.getTagName();

        if (null === tagName || "select" !== tagName) {
            throw new SelectError('No select');
        }

    };

}
