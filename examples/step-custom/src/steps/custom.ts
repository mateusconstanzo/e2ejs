import { Then } from 'cucumber'

import {
    ActionUtil,
    AssertionUtil,
    ElementUtil
} from 'e2ejs'

Then(/^Goto google$/, async () => {

    await ActionUtil.get("http://www.google.com.br");

});

Then(/^I enter e2ejs in search$/, async () => {

    var webElement = ElementUtil.findElement("id", "lst-ib");

    await ActionUtil.sendKeys(webElement, "e2ejs");

    await ActionUtil.sleep(1);

});