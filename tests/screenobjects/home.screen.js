const screen = require('./base.screen');
// const getSelectorByPlatform = require("../helpers/utils");
// const SELECTORS = {

//     EXPLORE_BUTTON: '~welcome-screen-explore-button',
//     ENV_SELECT_BUTTON: '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]'
// };


// import {getSelectorByPlatform} from '../helpers/utils';

const SELECTORS = {
    ANDROID: {
        EXPLORE_BUTTON: '~welcome-screen-explore-button',
        ENV_SELECT_BUTTON: '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]'
    },
    IOS: {
        EXPLORE_BUTTON: '',
        ENV_SELECT_BUTTON: ''

    }
};

class HomeScreen extends screen {


    getExploreButton() {
        return $(this.getSelectorByPlatform(SELECTORS).EXPLORE_BUTTON);
    }

    getEnvSelectionButton() {
        return $(this.getSelectorByPlatform(SELECTORS).ENV_SELECT_BUTTON);
    }

    async clickExploreButton() {
        await(this.getExploreButton()).waitForDisplayed();
        await(this.getExploreButton()).click();
    }

    async clickEnvSelectionButton() {
        await this.getEnvSelectionButton().waitForDisplayed();
        await this.getEnvSelectionButton().click();
    }

    getSelectorByPlatform() {
        return driver.isAndroid ? SELECTORS.ANDROID : SELECTORS.IOS;
    }
}

module.exports = new HomeScreen();
