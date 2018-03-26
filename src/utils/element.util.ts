import {
    browser,
    by,
    element,
    WebElementPromise,
    ElementFinder,
} from "protractor";


export class ElementUtil {

    static findElement(type: string, selector: string): WebElementPromise {

        switch (type) {

            case "id":
                return this.findByid(selector);

            case "name":
                return this.findByName(selector);

            case "linkText":
                return this.findByLinkText(selector);

            case "class":
                return this.findByClassName(selector);

        }

    };

    static getElementFinder(type: string, selector: string): ElementFinder {

        switch (type) {

            case "id":
                return element(by.id(selector));

            case "name":
                return element(by.name(selector));

            case "linkText":
                return element(by.linkText(selector));

            case "class":
                return element(by.className(selector));

        }

    };
    static findByid(selector: string): WebElementPromise {
        return browser.findElement(
            by.id(selector)
        );
    }

    static findByName(selector: string): WebElementPromise {
        return browser.findElement(
            by.name(selector)
        );
    }

    static findByLinkText(selector: string): WebElementPromise {
        return browser.findElement(
            by.linkText(selector)
        );
    }

    static findByClassName(selector: string): WebElementPromise {
        return browser.findElement(
            by.className(selector)
        );
    }

}