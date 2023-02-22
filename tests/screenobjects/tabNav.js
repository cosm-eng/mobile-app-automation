const SELECTORS = {

    PROFILE_ICON: '//android.view.View[@content-desc="tab-bar-profile-item"]/android.view.ViewGroup',
    DISCOVER_ICON: '~tab-bar-events-item',
    TICKET_ICON: '//android.widget.EditText[@content-desc="login-form-input-password"]',
    FNB_ICON: '~generic-button-wrapper'

};

class tabNavigation {

    getProfileIcon() {
        return $(SELECTORS.PROFILE_ICON);
    }

    getDiscoverIcon() {
        return $(SELECTORS.DISCOVER_ICON);
    }

    getFnbIcon() {
        return $(SELECTORS.FNB_ICON);
    }

    getTicketIcon() {
        return $(SELECTORS.TICKET_ICON);
    }

    async clickProfileIcon() {
        await(await this.getProfileIcon()).waitForDisplayed();
        await(await this.getProfileIcon()).click();
    }

    async clickDiscoverIcon() {
        await(await this.getDiscoverIcon()).waitForDisplayed();
        await(await this.getDiscoverIcon()).click();
    }

    async clickTicketsIcon() {
        const profileBtn = await $('~');
        await profileBtn.waitForDisplayed();
        await profileBtn.click();
    }

    async clickFnBIcon() {
        const profileBtn = await $('~');
        await profileBtn.waitForDisplayed();
        await profileBtn.click();
    }

}

module.exports = new tabNavigation();
