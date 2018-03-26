import {
    browser,
    by,
    element,
    WebElementPromise,
    ElementFinder,
    ElementArrayFinder,
    WebElement
} from "protractor";

export class Select {

    private element: WebElementPromise;
    private isMulti: boolean;

    constructor(webElement: WebElementPromise) {
        this.setWebElement(webElement);
    }

    async setWebElement(webElement: WebElementPromise) {

        let tagName = await webElement.getTagName();

        if (null == tagName || "select" !== tagName) {
            throw new Error('No select');
        }

        this.element = webElement;

        let value = await this.element.getAttribute("multiple");

        this.isMulti = (value != null && "false" !== value);

    };

    async getOptions() {
        return await this.element.findElements(by.tagName("option"));
    }

    async getFirstSelectedOption() {

        let options = await this.getOptions();

        for (let option of options) {

            if (option.isSelected()) {
                return option;
            }

        }

        throw new Error('No options are selected');

    }

}