import {
    browser,
    by,
    element,
    WebElementPromise,
    ElementFinder,
    ElementArrayFinder
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

            case "partialLinkText":
                return this.findByPartialLinkText(selector);

            case "class":
                return this.findByClassName(selector);

        }

    };

    // todo validar
    static getElementsFinder(type: string, selector: string): ElementArrayFinder {

        switch (type) {

            case "id":
                return element.all(by.id(selector));
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

            case "partialLinkText":
            return element(by.partialLinkText(selector));

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

    static findByPartialLinkText(selector: string): WebElementPromise {
        return browser.findElement(
            by.partialLinkText(selector)
        );
    }

    static findByClassName(selector: string): WebElementPromise {
        return browser.findElement(
            by.className(selector)
        );
    }

}