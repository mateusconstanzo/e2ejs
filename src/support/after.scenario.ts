import * as path from 'path';
import { After, Status, HookScenarioResult } from 'cucumber';
import { browser } from 'protractor';
import { WriteStream, ensureDirSync, createWriteStream } from 'fs-extra';

After(async function (scenario: HookScenarioResult) {

    if (scenario.result.status === Status.FAILED) {

        const screenshot = await (browser.takeScreenshot());

        const fileName = `${Date.now()}.png`;

        this.attach(screenshot, 'image/png');

        saveScreenshot(screenshot, fileName);

        return Promise.resolve();

    }

});

/**
 * Save a screenshot
 */
function saveScreenshot(screenshot: string, fileName: string) {

    const screenshotPath = path.resolve(process.cwd(), 'reports/screenshots');

    const filepath = path.resolve(screenshotPath, fileName);

    let stream: WriteStream;

    ensureDirSync(screenshotPath);
    stream = createWriteStream(filepath);
    stream.write(new Buffer(screenshot, 'base64'));
    stream.end();

}