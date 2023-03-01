const SELECTORS = {
    ANDROID: {
        PROFILE_IMAGE: '//android.widget.ScrollView[@content-desc="profile-screen-form-scrollview"]/android.view.ViewGroup/android.view.ViewGroup[2]'
    },
    IOS: {
        PROFILE_IMAGE: '//android.widget.ScrollView[@content-desc="profile-screen-form-scrollview"]/android.view.ViewGroup/android.view.ViewGroup[2]'

    }

};
class ProfileScreen {

    getProfileImage() {
        return $(this.getSelectorByPlatform(SELECTORS).PROFILE_IMAGE);
    }

    async profileImageIconIsDisplayed() {
        return await(await this.getProfileImage()).waitForDisplayed(3000);
    }
    getSelectorByPlatform() {
        return driver.isAndroid ? SELECTORS.ANDROID : SELECTORS.IOS;
    }
}

module.exports = new ProfileScreen();
