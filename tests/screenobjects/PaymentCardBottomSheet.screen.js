const screen = require('./base.screen');

const SELECTORS = {

    VISA_CARD: '//android.view.ViewGroup[contains(@content-desc,"VISA 1111")]'

};

class PaymentCardBottomSheetScreen extends screen {

    getVisaCard() {
        return $(SELECTORS.VISA_CARD);
    }

    async selectVisaCard() {
        await(await this.getVisaCard()).waitForDisplayed();
        await(await this.getVisaCard()).click();
    }

}

module.exports = new PaymentCardBottomSheetScreen();
