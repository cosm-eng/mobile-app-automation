const screen = require('./base.screen');
const SELECTORS = {

    VIEW_TICKET_BUTTON: '//android.view.ViewGroup[@content-desc="generic-button-wrapper"]/android.view.View'

};

class OrderConfirmationScreen extends screen {

    getViewTicketButton() {
        return $(SELECTORS.VIEW_TICKET_BUTTON);
    }


    async isViewTicketsDisplayed() {
        const viewbtnisDisplayed = await(await this.getViewTicketButton()).isDisplayed();
        console.log("View tickets button is enabled " + viewbtnisDisplayed)
        return viewbtnisDisplayed;
    }


}

module.exports = new OrderConfirmationScreen();
