const screen = require('./base.screen');


class UpcomingEventsScreen extends screen {

    async clickFirstEvent() { // for Staging
        const firstEvent = await $('//android.view.ViewGroup[@content-desc="events-event-list-item-$oid:63a4e005d3107ae822714de7_$oid:63a4e0385a4a7d7a517bac6d"]/android.widget.TextView[1]');
        // For QA
        // const firstEvent = await $('~events-event-list-item-$oid:63e13dc5fcf1d1c36bfc36d7_$oid:63e13debdd6cbe3a56e02e5b')
        await firstEvent.waitForDisplayed();
        await firstEvent.click();
    }

}

module.exports = new UpcomingEventsScreen();
