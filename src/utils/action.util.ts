import { browser, by, protractor, WebElementPromise } from "protractor";

export class ActionUtil {

    static async get(url: string) {
        await browser.get(url);
    };

    static async back() {
        await browser.navigate().back();
    };

    static async forward() {
        await browser.navigate().forward();
    };

    static async refresh() {
        await browser.navigate().refresh();
    };

    static async click(webElement: WebElementPromise) {
        await webElement.click();
    };

    static async doubleClick(webElement: WebElementPromise) {
        await browser.actions().doubleClick(webElement).perform();
    }

    static async sendKeys(webElement: WebElementPromise, text: string) {
        await webElement.sendKeys(text);
    }

    static async clear(webElement: WebElementPromise) {
        await webElement.clear();
    }

    static async enter() {
        await browser.actions().sendKeys(protractor.Key.ENTER).perform();
    }

}