const screen = require('./base.screen');


class UpcomingEventsScreen extends screen {

    async clickFirstEvent() { // for Staging
        const firstEvent = await $('//android.view.ViewGroup[@content-desc="events-event-list-item-$oid:63a4dcccd3107ae822714de6_$oid:63a4dcf25a4a7d7a517bac6c"]/android.view.ViewGroup[1]/android.view.ViewGroup/android.widget.ImageView');
        // For QA
        // const firstEvent = await $('~events-event-list-item-$oid:63e13dc5fcf1d1c36bfc36d7_$oid:63e13debdd6cbe3a56e02e5b')
        await firstEvent.waitForDisplayed();
        await firstEvent.click();
    }

}

module.exports = new UpcomingEventsScreen();
