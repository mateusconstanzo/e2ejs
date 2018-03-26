import * as chai from 'chai'
import * as chaiAsPromised from 'chai-as-promised'

import {
    AssertionUtil,
    ElementUtil
} from '../utils'

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

Then(/^element having (id|name|class|xpath|css) "([^"]*)" should be present$/, async (type, element) => {

    let elementFinder = ElementUtil.getElementFinder(type, element);

    await AssertionUtil.presenceOf(elementFinder);

});