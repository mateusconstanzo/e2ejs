import { browser, protractor, WebElement } from "protractor";

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

    static async click(webElement: WebElement) {
        await webElement.click();
    };

    static async doubleClick(webElement: WebElement) {
        await browser.actions().doubleClick(webElement).perform();
    }

    static async sendKeys(webElement: WebElement, text: string) {
        await webElement.sendKeys(text);
    }

    static async clear(webElement: WebElement) {
        await webElement.clear();
    }

    static async enter() {
        await browser.actions().sendKeys(protractor.Key.ENTER).perform();
    }

    static async switchToWindow(tab: number) {
        const handles = await browser.getAllWindowHandles()
        await browser.switchTo().window(handles[tab - 1])
    }

    static async close() {
        await browser.close();
    }

    static async sleep(seconds: number) {
        await browser.sleep(seconds * 1000);
    }

}
