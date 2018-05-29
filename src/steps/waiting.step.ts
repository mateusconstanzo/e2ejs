import { Then } from 'cucumber';

import {
    ElementUtil,
    AssertionUtil,
    ActionUtil
} from '../utils';

Then(/^I wait element having (id|name|class|xpath|css|\$) "([^"]*)" should be present$/, async (type: string, element: string) => {

    const webElement = ElementUtil.getElementFinder(type, element);

    await AssertionUtil.visibilityOf(webElement, 9000);

});

Then(/^I wait element having (id|name|class|xpath|css|\$) "([^"]*)" should not be present$/, async (type: string, element: string) => {

    const webElement = ElementUtil.getElementFinder(type, element);

    await AssertionUtil.invisibilityOf(webElement, 9000);

});

Then(/^I wait "([^"]*)" seconds$/, async (seconds) => {

    await ActionUtil.sleep(seconds);

});