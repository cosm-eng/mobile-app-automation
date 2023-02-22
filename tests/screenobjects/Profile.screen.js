// const profileImageIcon = '//android.widget.ScrollView[@content-desc="profile-screen-form-scrollview"]/android.view.ViewGroup/android.view.ViewGroup[2]';
const SELECTORS = {

    PROFILE_IMAGE: '//android.widget.ScrollView[@content-desc="profile-screen-form-scrollview"]/android.view.ViewGroup/android.view.ViewGroup[2]'

};
class ProfileScreen {

    getProfileImage() {
        return $(SELECTORS.PROFILE_IMAGE);
    }

    async profileImageIconIsDisplayed() {
        return await(await this.getProfileImage()).waitForDisplayed(3000);
    }
}

module.exports = new ProfileScreen();
