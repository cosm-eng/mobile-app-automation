const screen = require('./base.screen');

const SELECTORS = {

    PLUS_ICON: '(//android.view.ViewGroup[@content-desc="section-seat-selector-plus-button"])[1]/android.view.ViewGroup',
    GET_TICKETS_BUTTON: '//android.view.ViewGroup[@content-desc="generic-button-wrapper"]/android.view.View'
};
class SelectTciketScreen extends screen {


    getPlusIcon() {
        return $(SELECTORS.PLUS_ICON);
    }

    getGetTicketsButton() {
        return $(SELECTORS.GET_TICKETS_BUTTON);
    }


    async clickPlusIconVipZone() {
        await(await this.getPlusIcon()).waitForDisplayed();
        await(await this.getPlusIcon()).click();
    }

    async clickGetTicketsButton() {
        await(await this.getGetTicketsButton()).waitForDisplayed();
        await(await this.getGetTicketsButton()).click();
    }


}

module.exports = new SelectTciketScreen();
