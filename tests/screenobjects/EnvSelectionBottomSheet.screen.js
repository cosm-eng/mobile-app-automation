const screen = require('./base.screen');
const SELECTORS = {
    ANDROID: {
        QA_ENV: '(//android.view.ViewGroup[@content-desc="rounded-radio-container-touchable"])[2]',
        STAGING_ENV: '(//android.view.ViewGroup[@content-desc="rounded-radio-container-touchable"])[3]',
        RESTART_APP_BUTTON: '//android.view.ViewGroup[@content-desc="bottom-sheet-payment-add-card"]/android.view.View'
    },
    IOS: {

        QA_ENV: '(//android.view.ViewGroup[@content-desc="rounded-radio-container-touchable"])[2]',
        STAGING_ENV: '(//android.view.ViewGroup[@content-desc="rounded-radio-container-touchable"])[3]',
        RESTART_APP_BUTTON: '//android.view.ViewGroup[@content-desc="bottom-sheet-payment-add-card"]/android.view.View'

    }

};

class EnvSelectionBottomSheetScreen extends screen {


    getQAenv() {
        return $(this.getSelectorByPlatform(SELECTORS).QA_ENV);
    }
    getStagingenv() {
        return $(this.getSelectorByPlatform(SELECTORS).STAGING_ENV);
    }
    getRestartAppButton() {
        return $(this.getSelectorByPlatform(SELECTORS).RESTART_APP_BUTTON);
    }

    async selectQaEnv() {
        await(await this.getQAenv()).waitForDisplayed();
        await(await this.getQAenv()).click();
    }

    async selectStagingEnv() {
        await(await this.getStagingenv()).waitForDisplayed();
        await(await this.getStagingenv()).click();
    }

    async clickRestartAppButton() {
        await(await this.getRestartAppButton()).waitForDisplayed();
        await(await this.getRestartAppButton()).click();
    }

    async selectEnv(env) {

        if (env == 'qa') {
            await(await this.selectQaEnv());
        } else {
            await(await this.selectStagingEnv());

        }

    }


    getSelectorByPlatform() {
        return driver.isAndroid ? SELECTORS.ANDROID : SELECTORS.IOS;
    }


}

module.exports = new EnvSelectionBottomSheetScreen();
