const screen = require('./base.screen');
const SELECTORS = {

    PAYMENT_METHOD_BUTTON: '//android.view.ViewGroup[@content-desc="payment-method-selector-button"]/android.widget.TextView',
    COMPLETE_ORDER_BUTTON: '//android.view.ViewGroup[@content-desc="generic-button-wrapper"]/android.view.View'

};


class CheckoutScreen extends screen {

    getPaymentMethodButton() {
        return $(SELECTORS.PAYMENT_METHOD_BUTTON);
    }

    getCompleteOrderButton() {
        return $(SELECTORS.COMPLETE_ORDER_BUTTON);
    }
    async clickPaymentMethodButton() {
        await(await this.getPaymentMethodButton()).waitForDisplayed();
        await(await this.getPaymentMethodButton()).click();
    }

    async clickCompleteOrderButton() {
        await(await this.getCompleteOrderButton()).waitForDisplayed();
        await(await this.getCompleteOrderButton()).click();
    }


}

module.exports = new CheckoutScreen();
