const { Given, When, Then } = require("cucumber");

import {
    ActionUtil,
    ElementUtil,
    AssertionUtil
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

When(/^I click on element having (id|name|class|xpath|css) "([^"]*)" and text "([^"]*)"$/, async (type, element, text) => {

    var webElement = ElementUtil.findElement(type, element);

    await AssertionUtil.equal(webElement.getText(), text);

    await ActionUtil.click(webElement);

});
