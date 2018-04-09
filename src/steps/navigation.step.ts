import { Then } from 'cucumber'

import { ActionUtil } from '../utils'

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