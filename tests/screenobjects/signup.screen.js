const BaseScreen = require('./base.screen');
const SELECTORS = {

    EMAIL_FIELD: '~signup-form-input-email',
    PASSWORD_FIELD: '~signup-form-input-password',
    FIRSTNAME_FIELD: '~signup-form-input-firstname',
    LASTNAME_FIELD: '~signup-form-input-lastname',
    SIGNUP_BUTTON: '~Sign up',
    SIGNIN_BUTTON: '~generic-button-wrapper',
    VALIDATION_CONTAINER: '~sign-up-password-validation-container',
    LOGIN_ERR_MSG: '~login-error-message'

};
class SignUpScreen extends BaseScreen {

    getSignUpButton() {
        return $(SELECTORS.SIGNUP_BUTTON);
    }

    getFirstNameField() {
        return $(SELECTORS.FIRSTNAME_FIELD);
    }

    getLastNameField() {
        return $(SELECTORS.LASTNAME_FIELD);
    }

    getEmailField() {
        return $(SELECTORS.EMAIL_FIELD);
    }

    getPasswordField() {
        return $(SELECTORS.PASSWORD_FIELD);
    }

    getValidationContainer() {
        return $(SELECTORS.VALIDATION_CONTAINER);
    }
    getSignInButton() {
        return $(SELECTORS.SIGNIN_BUTTON);
    }

    getloginErrMessage() {
        return $(SELECTORS.LOGIN_ERR_MSG);
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
    // async enterLastName(lastname) {
    //     const lastnamefield = await $('~tab-bar-events-item');
    //     await lastnamefield.waitForDisplayed();
    //     await lastnamefield.click();
    //     await lastnamefield.setValue(lastname)
    // }

}

module.exports = new SignUpScreen();
