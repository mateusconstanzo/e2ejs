const { Given, When, Then } = require("cucumber");

import {
    ActionUtil,
    ElementUtil
} from '../utils'

When(/^I enter "([^"]*)" into input field having (id|name|class|xpath|css) "([^"]*)"$/, async (text, type, element) => {

    var webElement = ElementUtil.findElement(type, element);

    await ActionUtil.sendKeys(webElement, text);

});

Then(/^I clear input field having (id|name|class|xpath|css) "([^"]*)"$/, async (type, element) => {

    var webElement = ElementUtil.findElement(type, element);

    await ActionUtil.clear(webElement);

});
