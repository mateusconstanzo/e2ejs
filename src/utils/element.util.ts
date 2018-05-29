import {
    browser,
    by,
    element,
    WebElement,
    ElementFinder,
    ElementArrayFinder,
    $
} from "protractor";

import {
    By
} from "selenium-webdriver";

export class ElementUtil {

    static findElement(type: string, selector: string): WebElement {

        if (type === '$') {
            return $(selector).getWebElement();
        }

        return browser.findElement(
            this.getBy(type, selector)
        );

    };

    static getElementsFinder(type: string, selector: string): ElementArrayFinder {

        return element.all(
            this.getBy(type, selector)
        );

    };

    static getElementFinder(type: string, selector: string): ElementFinder {

        if (type === '$') {
            return $(selector);
        }

        return element(
            this.getBy(type, selector)
        );

    };

    static getBy(type: string, selector: string): By {

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