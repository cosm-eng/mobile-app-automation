const screen = require('./base.screen');
const SELECTORS = {

    TICKET_BOTTOMSHEET: '//android.view.ViewGroup[@content-desc="bottom-sheet-content"]/android.view.ViewGroup'

};

class MyTicketBottomSheet extends screen {


    getMyTicketBottomSheet() {
        return $(SELECTORS.TICKET_BOTTOMSHEET);
    }

    async myTicketBottomSheetIsDisplayed() {
        expect(await this.getMyTicketBottomSheet()).toBeDisabled();
    }

}

module.exports = new MyTicketBottomSheet();
