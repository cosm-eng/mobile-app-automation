const SELECTORS = {
    ANDROID: {
        PROFILE_ICON: '//android.view.View[@content-desc="tab-bar-profile-item"]/android.view.ViewGroup',
        DISCOVER_ICON: '~tab-bar-events-item',
        TICKET_ICON: '//android.widget.EditText[@content-desc="login-form-input-password"]',
        FNB_ICON: '~generic-button-wrapper'
    },
    IOS: {
        PROFILE_ICON: '',
        DISCOVER_ICON: '',
        TICKET_ICON: '',
        FNB_ICON: ''
    }
};

class tabNavigation {

    getProfileIcon() {
        return $(this.getSelectorByPlatform(SELECTORS).PROFILE_ICON);
    }

    getDiscoverIcon() {
        return $(this.getSelectorByPlatform(SELECTORS).DISCOVER_ICON);
    }

    getFnbIcon() {
        return $(this.getSelectorByPlatform(SELECTORS).FNB_ICON);
    }

    getTicketIcon() {
        return $(this.getSelectorByPlatform(SELECTORS).TICKET_ICON);
    }

    async clickProfileIcon() {
        await(this.getProfileIcon()).waitForDisplayed();
        await(this.getProfileIcon()).click();
    }

    async clickDiscoverIcon() {
        await(this.getDiscoverIcon()).waitForDisplayed();
        await(this.getDiscoverIcon()).click();
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

    getSelectorByPlatform() {
        return driver.isAndroid ? SELECTORS.ANDROID : SELECTORS.IOS;
    }
}

module.exports = new tabNavigation();
