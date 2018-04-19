import { When } from 'cucumber'

import {
    ActionUtil,
    ElementUtil,
    AssertionUtil
} from '../utils'

When(/^I click on element having (id|name|class|xpath|css) "([^"]*)"$/, async (type, element) => {

    const webElement = ElementUtil.findElement(type, element);

    await ActionUtil.click(webElement);

});

When(/^I click on link having text "([^"]*)"$/, async (text) => {

    const webElement = ElementUtil.findElement("linkText", text);

    await ActionUtil.click(webElement);

});

When(/^I double click on element having (id|name|class|xpath|css) "([^"]*)"$/, async (type, element) => {

    const webElement = ElementUtil.findElement(type, element);

    await ActionUtil.doubleClick(webElement);

});

When(/^I click on element having (id|name|class|xpath|css) "([^"]*)" and text "([^"]*)"$/, async (type, element, text) => {

    const webElement = ElementUtil.findElement(type, element);

    await AssertionUtil.equal(webElement.getText(), text);

    await ActionUtil.click(webElement);

});
