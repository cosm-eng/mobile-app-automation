const BaseScreen = require('./base.screen');
const SELECTORS = {
    ANDROID: {

        EMAIL_FIELD: '~signup-form-input-email',
        PASSWORD_FIELD: '~signup-form-input-password',
        FIRSTNAME_FIELD: '~signup-form-input-firstname',
        LASTNAME_FIELD: '~signup-form-input-lastname',
        SIGNUP_BUTTON: '~Sign up',
        SIGNIN_BUTTON: '~generic-button-wrapper',
        VALIDATION_CONTAINER: '~sign-up-password-validation-container',
        LOGIN_ERR_MSG: '~login-error-message'

    },
    IOS: {
        EMAIL_FIELD: '~signup-form-input-email',
        PASSWORD_FIELD: '~signup-form-input-password',
        FIRSTNAME_FIELD: '~signup-form-input-firstname',
        LASTNAME_FIELD: '~signup-form-input-lastname',
        SIGNUP_BUTTON: '~Sign up',
        SIGNIN_BUTTON: '~generic-button-wrapper',
        VALIDATION_CONTAINER: '~sign-up-password-validation-container',
        LOGIN_ERR_MSG: '~login-error-message'
    }

};
class SignUpScreen extends BaseScreen {

    getSignUpButton() {
        return $(this.getSelectorByPlatform(SELECTORS).SIGNUP_BUTTON);
    }

    getFirstNameField() {
        return $(this.getSelectorByPlatform(SELECTORS).FIRSTNAME_FIELD);
    }

    getLastNameField() {
        return $(this.getSelectorByPlatform(SELECTORS).LASTNAME_FIELD);
    }

    getEmailField() {
        return $(this.getSelectorByPlatform(SELECTORS).EMAIL_FIELD);
    }

    getPasswordField() {
        return $(this.getSelectorByPlatform(SELECTORS).PASSWORD_FIELD);
    }

    getValidationContainer() {
        return $(this.getSelectorByPlatform(SELECTORS).VALIDATION_CONTAINER);
    }
    getSignInButton() {
        return $(this.getSelectorByPlatform(SELECTORS).SIGNIN_BUTTON);
    }

    getloginErrMessage() {
        return $(this.getSelectorByPlatform(SELECTORS).LOGIN_ERR_MSG);
    }

    async clickSignupButton() {
        await(await this.getSignUpButton()).waitForDisplayed();
        await(await this.getSignUpButton()).click();
    }

    async enterFirstName(firstname) {
        await(await this.getFirstNameField()).waitForDisplayed();
        await(await this.getFirstNameField()).click();
        await(await this.getFirstNameField()).setValue(firstname);

    }

    async enterLastName(lastname) {
        await(await this.getLastNameField()).waitForDisplayed();
        await(await this.getLastNameField()).click();
        await(await this.getLastNameField()).setValue(lastname)
    }

    async enterEmailField(email) {
        await(await this.getEmailField()).waitForDisplayed();
        await(await this.getEmailField()).click();
        await(await this.getEmailField()).setValue(email)
    }

    async enterPassword(password) {
        await(await this.getPasswordField()).waitForDisplayed();
        await(await this.getPasswordField()).click();
        await(await this.getPasswordField()).setValue(password)
    }

    async clickSignInButton() {
        await(await this.getSignInButton()).waitForDisplayed();
        await(await this.getSignInButton()).click();
    }

    async verifyLoginErrorMessage() {
        let errdisplayed = await(await this.getloginErrMessage()).isDisplayed();
        console.log("Error message is displayed " + errdisplayed)
        // getText :to do
        return errdisplayed;
    }

    async verifySignUpMshContainerIsDisplayed() {
        const errdisplayed = await(await this.getValidationContainer()).isDisplayed();
        console.log("Sign up container is displayed " + errdisplayed)
        return errdisplayed;
    }
    getSelectorByPlatform() {
        return driver.isAndroid ? SELECTORS.ANDROID : SELECTORS.IOS;
    }

}

module.exports = new SignUpScreen();
