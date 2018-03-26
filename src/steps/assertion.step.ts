import * as chai from 'chai'
import * as chaiAsPromised from 'chai-as-promised'

import {
    AssertionUtil,
    ElementUtil
} from '../utils'
import { browser } from 'protractor';

const { Given, When, Then } = require("cucumber");

chai.use(chaiAsPromised);
const expect = chai.expect;

Then(/^element having (id|name|class|xpath|css) "([^"]*)" should have text as "([^"]*)"$/, async (type, element, text) => {

    var webElement = ElementUtil.findElement(type, element);

    await AssertionUtil.equal(webElement.getText(), text);

});

Then(/^element having (id|name|class|xpath|css) "([^"]*)" should not have text as "([^"]*)"$/, async (type, element, text) => {

    var webElement = ElementUtil.findElement(type, element);

    await AssertionUtil.notEqual(webElement.getText(), text);

});

Then(/^element having (id|name|class|xpath|css) "([^"]*)" should have partial text as "([^"]*)"$/, async (type, element, text) => {

    var webElement = ElementUtil.findElement(type, element);

    await AssertionUtil.contains(webElement.getText(), text);

});

Then(/^element having (id|name|class|xpath|css) "([^"]*)" should not have partial text as "([^"]*)"$/, async (type, element, text) => {

    var webElement = ElementUtil.findElement(type, element);

    await AssertionUtil.notContains(webElement.getText(), text);

});

Then(/^element having (id|name|class|xpath|css) "([^"]*)" should have attribute "([^"]*)" with value "([^"]*)"$/, async (type, element, attribute, value) => {

    var webElement = ElementUtil.findElement(type, element);

    await AssertionUtil.equal(webElement.getAttribute(attribute), value);

});

Then(/^element having (id|name|class|xpath|css) "([^"]*)" should have attribute "([^"]*)" with partial value "([^"]*)"$/, async (type, element, attribute, value) => {

    var webElement = ElementUtil.findElement(type, element);

    await AssertionUtil.contains(webElement.getAttribute(attribute), value);

});

Then(/^element having (id|name|class|xpath|css) "([^"]*)" should not have attribute "([^"]*)" with value "([^"]*)"$/, async (type, element, attribute, value) => {

    var webElement = ElementUtil.findElement(type, element);

    await AssertionUtil.notEqual(webElement.getAttribute(attribute), value);

});

Then(/^element having (id|name|class|xpath|css) "([^"]*)" should not have attribute "([^"]*)" with partial value "([^"]*)"$/, async (type, element, attribute, value) => {

    var webElement = ElementUtil.findElement(type, element);

    await AssertionUtil.notContains(webElement.getAttribute(attribute), value);

});

Then(/^element having (id|name|class|xpath|css) "([^"]*)" should be enabled$/, async (type, element) => {

    var webElement = ElementUtil.findElement(type, element);

    await AssertionUtil.isTrue(webElement.isEnabled());

});

Then(/^element having (id|name|class|xpath|css) "([^"]*)" should be disabled$/, async (type, element) => {

    var webElement = ElementUtil.findElement(type, element);

    await AssertionUtil.isFalse(webElement.isEnabled());

});

Then(/^element having (id|name|class|xpath|css) "([^"]*)" should be present$/, async (type, element) => {

    let elementFinder = ElementUtil.getElementFinder(type, element);

    await AssertionUtil.presenceOf(elementFinder);

});

Then(/^element having (id|name|class|xpath|css) "([^"]*)" should not be present$/, async (type, element) => {

    var webElement = ElementUtil.findElement(type, element);

    await AssertionUtil.isFalse(webElement.isDisplayed());

});

//TODO TESTAR - DAQUI pra BAIXO
Then(/^element having (id|name|class|xpath|css) "([^"]*)" should not exist$/, async (type, element) => {

    var elementsFinder = ElementUtil.getElementsFinder(type, element); 

    await AssertionUtil.equalLength(elementsFinder.count(), 0);

});

Then(/^element having (id|name|class|xpath|css) "([^"]*)" should be checked$/, async (type, element) => {

    var webElement = ElementUtil.findElement(type, element);

    await AssertionUtil.isTrue(webElement.isSelected());

});

Then(/^element having (id|name|class|xpath|css) "([^"]*)" should be unchecked$/, async (type, element) => {

    var webElement = ElementUtil.findElement(type, element);

    await AssertionUtil.isFalse(webElement.isSelected());

});

Then(/^link having text "([^"]*)" should be present$/, async (link) => {

    var webElement = ElementUtil.findElement("linkText", link);

    await AssertionUtil.isTrue(webElement.isDisplayed());

});

Then(/^link having text "([^"]*)" should not be present$/, async (link) => {

    var webElement = ElementUtil.findElement("linkText", link);

    await AssertionUtil.isFalse(webElement.isDisplayed());

});

Then(/^link having partial text "([^"]*)" should be present$/, async (link) => {

    var webElement = ElementUtil.findElement("partialLinkText", link);

    await AssertionUtil.isTrue(webElement.isDisplayed());

});

Then(/^link having partial text "([^"]*)" should not be present$/, async (link) => {

    var webElement = ElementUtil.findElement("partialLinkText", link);

    await AssertionUtil.isFalse(webElement.isDisplayed());

});

Then(/^I expect to see "([^"]*)" on page$/, async (text) => {

    await AssertionUtil.contains(browser.getPageSource(),text);

});