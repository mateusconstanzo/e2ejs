const { Given, When, Then } = require("cucumber");

import {
    ActionUtil,
    ElementUtil
} from '../utils'

When(/^I click on element having (id|name|class|xpath|css) "([^"]*)"$/, async (type, element) => {

    var webElement = ElementUtil.findElement(type, element);

    await ActionUtil.click(webElement);

});

When(/^I click on link having text "([^"]*)"$/, async (text) => {

    var webElement = ElementUtil.findElement("linkText", text);

    await ActionUtil.click(webElement);

});

When(/^I double click on element having (id|name|class|xpath|css) "([^"]*)"$/, async (type, element) => {

    var webElement = ElementUtil.findElement(type, element);

    await ActionUtil.doubleClick(webElement);

});
