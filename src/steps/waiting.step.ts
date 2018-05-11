import { browser, protractor } from 'protractor';
import { Then } from 'cucumber';

import {
    ElementUtil
} from '../utils';

Then(/^I wait element having (id|name|class|xpath|css) "([^"]*)" should be present$/, async (type: string, selector: string) => {

    await browser.wait(protractor.ExpectedConditions.visibilityOf(ElementUtil.getElementFinder(type, selector)), 9000);

});

Then(/^I wait element having (id|name|class|xpath|css) "([^"]*)" should not be present$/, async (type: string, selector: string) => {

    await browser.wait(protractor.ExpectedConditions.visibilityOf(ElementUtil.getElementFinder(type, selector)), 9000);

});
