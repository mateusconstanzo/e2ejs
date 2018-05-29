import {
    by,
    WebElement
} from "protractor";

export class SelectError extends Error {

}

export class SelectUtil {

    static async getFirstSelectedOption(webElement: WebElement): Promise<WebElement> {

        await this.valid(webElement);

        const options = await webElement.findElements(by.tagName("option"));

        for (const option of options) {

            if (await option.isSelected()) {
                return option;
            }

        }

        throw new SelectError('No options are selected');

    }

    static async valid(webElement: WebElement) {

        const tagName = await webElement.getTagName();

        if (null === tagName || "select" !== tagName) {
            throw new SelectError('No select');
        }

    };

    static async selectOptionByText(webElement: WebElement, option: string) {

        await this.valid(webElement);

        const options = await webElement.findElements(by.tagName("option"));

        for (const opt of options) {

            const optValue = await opt.getText();

            if (optValue === option) {

                await opt.click();

                return;

            }

        }

        throw new SelectError('Select without the informed value');

    }    

    static async selectOptionByValue(webElement: WebElement, option: string) {

        await this.valid(webElement);

        const options = await webElement.findElements(by.tagName("option"));

        for (const opt of options) {

            const optValue = await opt.getAttribute("value");

            if (optValue === option) {

                await opt.click();

                return;

            }

        }

        throw new SelectError('Select without the informed value');

    }


}