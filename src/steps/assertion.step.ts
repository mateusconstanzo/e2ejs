import { browser, error } from 'protractor';
import { Then } from 'cucumber'

import {
    AssertionUtil,
    ElementUtil,
    SelectUtil,
    RadioUtil,
    RadioError
} from '../utils';

Then(/^element having (id|name|class|xpath|css|\$) "([^"]*)" should have text as "([^"]*)"$/, async (type, element, text) => {

    const webElement = ElementUtil.findElement(type, element);

    await AssertionUtil.equal(webElement.getText(), text);

});

Then(/^element having (id|name|class|xpath|css|\$) "([^"]*)" should not have text as "([^"]*)"$/, async (type, element, text) => {

    const webElement = ElementUtil.findElement(type, element);

    await AssertionUtil.notEqual(webElement.getText(), text);

});

Then(/^element having (id|name|class|xpath|css|\$) "([^"]*)" should have partial text as "([^"]*)"$/, async (type, element, text) => {

    const webElement = ElementUtil.findElement(type, element);

    await AssertionUtil.contains(webElement.getText(), text);

});

Then(/^element having (id|name|class|xpath|css|\$) "([^"]*)" should not have partial text as "([^"]*)"$/, async (type, element, text) => {

    const webElement = ElementUtil.findElement(type, element);

    await AssertionUtil.notContains(webElement.getText(), text);

});

Then(/^element having (id|name|class|xpath|css|\$) "([^"]*)" should have attribute "([^"]*)" with value "([^"]*)"$/, async (type, element, attribute, value) => {

    const webElement = ElementUtil.findElement(type, element);

    await AssertionUtil.equal(webElement.getAttribute(attribute), value);

});

Then(/^element having (id|name|class|xpath|css|\$) "([^"]*)" should have attribute "([^"]*)" with partial value "([^"]*)"$/, async (type, element, attribute, value) => {

    const webElement = ElementUtil.findElement(type, element);

    await AssertionUtil.contains(webElement.getAttribute(attribute), value);

});

Then(/^element having (id|name|class|xpath|css|\$) "([^"]*)" should not have attribute "([^"]*)" with value "([^"]*)"$/, async (type, element, attribute, value) => {

    const webElement = ElementUtil.findElement(type, element);

    await AssertionUtil.notEqual(webElement.getAttribute(attribute), value);

});

Then(/^element having (id|name|class|xpath|css|\$) "([^"]*)" should not have attribute "([^"]*)" with partial value "([^"]*)"$/, async (type, element, attribute, value) => {

    const webElement = ElementUtil.findElement(type, element);

    await AssertionUtil.notContains(webElement.getAttribute(attribute), value);

});

Then(/^element having (id|name|class|xpath|css|\$) "([^"]*)" should be enabled$/, async (type, element) => {

    const webElement = ElementUtil.findElement(type, element);

    await AssertionUtil.isTrue(webElement.isEnabled());

});

Then(/^element having (id|name|class|xpath|css|\$) "([^"]*)" should be disabled$/, async (type, element) => {

    const webElement = ElementUtil.findElement(type, element);

    await AssertionUtil.isFalse(webElement.isEnabled());

});

Then(/^element having (id|name|class|xpath|css|\$) "([^"]*)" should be present$/, async (type, element) => {

    const elementFinder = ElementUtil.getElementFinder(type, element);

    await AssertionUtil.presenceOf(elementFinder);

});

Then(/^element having (id|name|class|xpath|css|\$) "([^"]*)" should not be present$/, async (type, element) => {

    try {

        const webElement = ElementUtil.findElement(type, element);

        await AssertionUtil.isFalse(webElement.isDisplayed());

    } catch (e) {

        if (!(e instanceof error.NoSuchElementError)) {
            throw e;
        }

    }

});

Then(/^element having (id|name|class|xpath|css|\$) "([^"]*)" should not exist$/, async (type, element) => {

    const elementsFinder = ElementUtil.getElementsFinder(type, element);

    await AssertionUtil.equalLength(await elementsFinder.count(), 0);

});

Then(/^element having (id|name|class|xpath|css|\$) "([^"]*)" should be checked$/, async (type, element) => {

    const webElement = ElementUtil.findElement(type, element);

    await AssertionUtil.isTrue(webElement.isSelected());

});

Then(/^element having (id|name|class|xpath|css|\$) "([^"]*)" should be unchecked$/, async (type, element) => {

    const webElement = ElementUtil.findElement(type, element);

    await AssertionUtil.isFalse(webElement.isSelected());

});

Then(/^link having text "([^"]*)" should be present$/, async (link) => {

    const webElement = ElementUtil.findElement("linkText", link);

    await AssertionUtil.isTrue(webElement.isDisplayed());

});

Then(/^link having text "([^"]*)" should not be present$/, async (link) => {

    try {

        const webElement = ElementUtil.findElement("linkText", link);

        await AssertionUtil.isFalse(webElement.isDisplayed());

    } catch (e) {

        if (!(e instanceof error.NoSuchElementError)) {
            throw e;
        }

    }

});

Then(/^link having partial text "([^"]*)" should be present$/, async (link) => {

    const webElement = ElementUtil.findElement("partialLinkText", link);

    await AssertionUtil.isTrue(webElement.isDisplayed());

});

Then(/^link having partial text "([^"]*)" should not be present$/, async (link) => {

    try {

        const webElement = ElementUtil.findElement("partialLinkText", link);

        await AssertionUtil.isFalse(webElement.isDisplayed());

    } catch (e) {

        if (!(e instanceof error.NoSuchElementError)) {
            throw e;
        }

    }

});

Then(/^option "([^"]*)" by text from dropdown having (id|name|class|xpath|css|\$) "([^"]*)" should be selected$/, async (option, type, element) => {

    const webElement = ElementUtil.findElement(type, element);

    const selected = await SelectUtil.getFirstSelectedOption(webElement);

    await AssertionUtil.equal(selected.getText(), option);

});

Then(/^option "([^"]*)" by value from dropdown having (id|name|class|xpath|css|\$) "([^"]*)" should be selected$/, async (option, type, element) => {

    const webElement = ElementUtil.findElement(type, element);

    const selected = await SelectUtil.getFirstSelectedOption(webElement);

    await AssertionUtil.equal(selected.getAttribute("value"), option);

});

Then(/^option "([^"]*)" by text from dropdown having (id|name|class|xpath|css|\$) "([^"]*)" should be unselected$/, async (option, type, element) => {

    const webElement = ElementUtil.findElement(type, element);

    const selected = await SelectUtil.getFirstSelectedOption(webElement);

    await AssertionUtil.notEqual(selected.getText(), option);

});

Then(/^option "([^"]*)" by value from dropdown having (id|name|class|xpath|css|\$) "([^"]*)" should be unselected$/, async (option, type, element) => {

    const webElement = ElementUtil.findElement(type, element);

    const selected = await SelectUtil.getFirstSelectedOption(webElement);

    await AssertionUtil.notEqual(selected.getAttribute("value"), option);

});

Then(/^radio button having (id|name|class|xpath|css|\$) "([^"]*)" should be selected$/, async (type, element) => {

    const webElements = ElementUtil.getElementsFinder(type, element);

    const selected = await RadioUtil.getFirstSelected(webElements);

    await AssertionUtil.isTrue(selected.isSelected());

});

Then(/^radio button having (id|name|class|xpath|css|\$) "([^"]*)" should be unselected$/, async (type, element) => {

    try {

        const webElements = ElementUtil.getElementsFinder(type, element);

        const selected = await RadioUtil.getFirstSelected(webElements);

        await AssertionUtil.isFalse(selected.isSelected());

    } catch (e) {

        if (!(e instanceof RadioError)) {
            throw e;
        }

    }

});

Then(/^I expect to see "([^"]*)" on page$/, async (text) => {

    await AssertionUtil.contains(await browser.getPageSource(), text);

});