import { Then } from 'cucumber'

import { browser } from "protractor";

import {
    ActionUtil,
    AssertionUtil
} from '../utils'

Then(/^I navigate to "([^"]*)"$/, async (url) => {

    await ActionUtil.get(url);

});

Then(/^I navigate back$/, async () => {

    await ActionUtil.back();

});

Then(/^I navigate forward$/, async () => {

    await ActionUtil.forward();

});

Then(/^I refresh page$/, async () => {

    await ActionUtil.refresh();

});

Then(/^I switch to tab "([^"]*)"$/, async (tab) => {

    await ActionUtil.switchToWindow(tab);

});

Then(/^I close tab "([^"]*)"$/, async (tab) => {

    await ActionUtil.switchToWindow(tab);

    await ActionUtil.close();

});

Then(/^I expect a new tab to be open$/, async () => {

    const handles = await browser.getAllWindowHandles()

    await AssertionUtil.isTrue(handles.length === 2)

});
