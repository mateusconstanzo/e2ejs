const { Given, When, Then } = require("cucumber");

import { ActionUtil } from '../utils'

Then(/^I navigate to "([^"]*)"$/, async (url) => {

    await ActionUtil.get(url);

});
