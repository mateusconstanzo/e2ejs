import { browser, by, element, WebElementPromise } from "protractor";

export class ElementUtil {

    static findElement(type: string, selector: string): WebElementPromise {

        switch (type) {

            case "id":
                return this.findByid(selector);

            case "name":
                return this.findByName(selector);

            case "linkText":
                return this.findByLinkText(selector);

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

}