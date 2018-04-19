import {
    browser,
    by,
    element,
    WebElementPromise,
    ElementFinder,
    ElementArrayFinder,
} from "protractor";

import {
    By
} from "selenium-webdriver";

export class ElementUtil {

    static findElement(type: string, selector: string): WebElementPromise {

        const locator = this.getLocator(type, selector);

        return browser.findElement(locator);

    };

    static getElementsFinder(type: string, selector: string): ElementArrayFinder {

        const locator = this.getLocator(type, selector);

        return element.all(locator);

    };

    static getElementFinder(type: string, selector: string): ElementFinder {

        const locator = this.getLocator(type, selector);

        return element(locator);

    };

    static getLocator(type: string, selector: string): By {

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

            case "xpath":
                return by.xpath(selector);

            case "css":
                return by.css(selector);

        }

    }

}