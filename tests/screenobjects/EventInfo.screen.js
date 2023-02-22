const screen = require('./base.screen');

const SELECTORS = {

    GET_TICKETS_BUTTON: '//android.view.ViewGroup[@content-desc="generic-button-wrapper"]/android.widget.TextView'

};

class EventInfoScreen extends screen {

    getGetTicketbuttonEventInfo() {
        return $(SELECTORS.GET_TICKETS_BUTTON);
    }

    async clickGetTicketsButton() {
        await(await this.getGetTicketbuttonEventInfo()).waitForDisplayed();
        await(await this.getGetTicketbuttonEventInfo()).click();
    }

}

module.exports = new EventInfoScreen();
