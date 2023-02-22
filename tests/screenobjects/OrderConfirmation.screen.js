const screen = require('./base.screen');

const SELECTORS = {

    VIEW_TICKET_BUTTON: '//android.view.ViewGroup[@content-desc="generic-button-wrapper"]/android.view.View',
    YOUR_ORDER_COMPLETE_BANNER: '//android.view.ViewGroup[@content-desc="header-navigation-container"]/android.widget.TextView'

};

class OrderConfirmationScreen extends screen {

    getViewTicketButton() {
        return $(SELECTORS.VIEW_TICKET_BUTTON);
    }

    getYourOrderCompleteBanner() {
        return $(SELECTORS.YOUR_ORDER_COMPLETE_BANNER);
    }


    async isViewTicketsDisplayed() {
        const viewbtnisDisplayed = await(await this.getViewTicketButton()).isDisplayed();
        console.log("View tickets button is enabled " + viewbtnisDisplayed)
        await expect(await this.getViewTicketButton()).isDisplayed;
    }

    async clickViewTicketButton() {
        await(await this.getViewTicketButton()).waitForDisplayed();
        await(await this.getViewTicketButton()).click();
    }

    async yourOrderCompleteMessageIsDisplayed() {
        // const orderCompleteBanner = await(await this.getYourOrderCompleteBanner()).isDisplayed();
        // console.log("Your Order is complete banner " + orderCompleteBanner)
        expect(await this.getYourOrderCompleteBanner()).toBeDisabled();
    }

    async yourOrderCompleteMessageTextVerification(successMessage) {
        // const orderCompleteText = await this.getYourOrderCompleteBanner();
        // const txt = await orderCompleteText.getText();
        // console.log("Order complete text message is: " + txt);
        expect(await this.getYourOrderCompleteBanner()).toHaveText(successMessage)
    }


}

module.exports = new OrderConfirmationScreen();
