import {
    browser,
    by,
    element,
    WebElementPromise,
    ElementFinder,
    ElementArrayFinder,
} from "protractor";

export class ElementUtil {

    static findElement(type: string, selector: string): WebElementPromise {

        let by = this.getBy(type, selector);

        return browser.findElement(by);

    };

    static getElementsFinder(type: string, selector: string): ElementArrayFinder {

        let by = this.getBy(type, selector);

        return element.all(by);

    };

    static getElementFinder(type: string, selector: string): ElementFinder {

        let by = this.getBy(type, selector);

        return element(by);

    };

    static getBy(type: string, selector: string) {

        switch (type) {

            case "id":
                return by.id(selector);

            case "name":
                return by.name(selector);

            case "linkText":
                return by.linkText(selector);

            case "partialLinkText":
                return by.partialLinkText(selector);

            case "class":
                return by.className(selector);

        }

    }

}