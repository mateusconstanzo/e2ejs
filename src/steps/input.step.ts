import {
    When
} from 'cucumber'

import {
    ActionUtil,
    ElementUtil,
    SelectUtil
} from '../utils'

When(/^I enter "([^"]*)" into input field having (id|name|class|xpath|css|\$) "([^"]*)"$/, async (text, type, element) => {

    const webElement = ElementUtil.findElement(type, element);

    await ActionUtil.sendKeys(webElement, text);

});

When(/^I clear input field having (id|name|class|xpath|css|\$) "([^"]*)"$/, async (type, element) => {

    const webElement = ElementUtil.findElement(type, element);

    await ActionUtil.clear(webElement);

});

When(/^I select option "([^"]*)" by text from dropdown having (id|name|class|xpath|css|\$) "([^"]*)"$/, async (option, type, element) => {

    const webElement = ElementUtil.findElement(type, element);

    await SelectUtil.selectOptionByText(webElement, option);

});


When(/^I select option "([^"]*)" by value from dropdown having (id|name|class|xpath|css|\$) "([^"]*)"$/, async (option, type, element) => {

    const webElement = ElementUtil.findElement(type, element);

    await SelectUtil.selectOptionByValue(webElement, option);

});
