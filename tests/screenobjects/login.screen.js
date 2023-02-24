const BaseScreen = require('./base.screen');
const SELECTORS = {

    EMAIL_FIELD: '//android.widget.EditText[@content-desc="login-form-input-email"]',
    PASSWORD_FIELD: '//android.widget.EditText[@content-desc="login-form-input-password"]',
    SIGNIN_BTN: '~generic-button-wrapper',
    LOGIN_ERR_MSG: '~login-error-message',
    BACK_ARROW_HEADER_NAV: '~header-navigation-back-button',
    SIGNIN_PROFILE: '//android.view.ViewGroup[@content-desc="generic-button-wrapper"]/android.view.View'


};
class LoginScreen extends BaseScreen {
    getEmailField() {
        return $(SELECTORS.EMAIL_FIELD);
    }

    getPasswordField() {
        return $(SELECTORS.PASSWORD_FIELD);
    }
    getSigninBtn() {
        return $(SELECTORS.SIGNIN_BTN);
    }

    getLoginErrMessage() {
        return $(SELECTORS.LOGIN_ERR_MSG);
    }

    getBackArrowHeaderNavigation() {
        return $(SELECTORS.BACK_ARROW_HEADER_NAV);
    }
    getSignInButtonAfterClickbackButton() {
        return $(SELECTORS.SIGNIN_PROFILE);
    }


    async sendkeysEmailField(email) {
        await(await this.getEmailField()).waitForDisplayed();
        await(await this.getEmailField()).setValue(email);
    }

    async sendkeysPasswordField(password) {
        await(await this.getPasswordField()).waitForDisplayed();
        await(await this.getPasswordField()).setValue(password);
    }

    async clickSignInButton() {
        await(await this.getSigninBtn()).waitForDisplayed();
        await(await this.getSigninBtn()).click();
    }

    async login(username, password) {
        await this.sendkeysEmailField(username);
        await this.sendkeysPasswordField(password);
    }

    async signBtnIsEnabled() {
        const isEnabled = await(await this.getSigninBtn()).isEnabled();
        console.log("Sign in button is enabled " + isEnabled)
        return isEnabled;
    }

    async loginErrMsg() {
        let errText = await(await this.getLoginErrMessage()).getText();
        console.log("Login Page invalid email passwprd error message is :: " + errText)
        return errText;
    }

    async clickBackArrowHeaderNav() {
        await(await this.getBackArrowHeaderNavigation()).waitForDisplayed();
        await(await this.getBackArrowHeaderNavigation()).click();
    }

    async clickSignInButtonAppearedAfterBackButtonClick() {
        await(await this.getSignInButtonAfterClickbackButton()).waitForDisplayed();
        await(await this.getSignInButtonAfterClickbackButton()).click();
    }
}

module.exports = new LoginScreen();
