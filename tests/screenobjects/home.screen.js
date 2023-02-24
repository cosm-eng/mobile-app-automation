const screen = require('./base.screen');
const SELECTORS = {

    EXPLORE_BUTTON: '~welcome-screen-explore-button',
    ENV_SELECT_BUTTON: '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]'
};

class HomeScreen extends screen {


    getExploreButton() {
        return $(SELECTORS.EXPLORE_BUTTON);
    }

    getEnvSelectionButton() {
        return $(SELECTORS.ENV_SELECT_BUTTON);
    }

    async clickExploreButton() {
        await(await this.getExploreButton()).waitForDisplayed();
        await(await this.getExploreButton()).click();
    }

    async clickEnvSelectionButton() {
        await(await this.getEnvSelectionButton()).waitForDisplayed();
        await(await this.getEnvSelectionButton()).click();
    }

}

module.exports = new HomeScreen();
