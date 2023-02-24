const {Given, When, Then} = require("@wdio/cucumber-framework");
const homeScreen = require("../screenobjects/home.screen");
const loginScreen = require("../screenobjects/login.screen");
const ProfileScreen = require("../screenobjects/Profile.screen");
const tabNav = require("../screenobjects/tabNav");
import {expect as expectChai} from 'chai'
import EnvSelectionBottomSheetScreen from '../screenobjects/EnvSelectionBottomSheet.screen';


Given(/^login- I am on the welcome screen$/, async () => {
    await browser.pause(5000);
    await homeScreen.clickEnvSelectionButton();
    await EnvSelectionBottomSheetScreen.selectQaEnv();
    await EnvSelectionBottomSheetScreen.clickRestartAppButton();
    await browser.pause(10000);
    await homeScreen.clickExploreButton();
    await tabNav.clickProfileIcon();
});


Given(/^login- user is on login page$/, async () => {
    await loginScreen.clickBackArrowHeaderNav();
    await loginScreen.clickSignInButtonAppearedAfterBackButtonClick();
});


When(/^login- user enters the '(.*)' and '(.*)'$/, async (email, pwd) => {
    await browser.pause(3000);
    await loginScreen.login(email, pwd);
});


When(/^login- click on sign in button$/, async () => {

    await loginScreen.clickSignInButton();
});


Then(/^login- user should be logged in and on user profile page is shown$/, async () => {
    await browser.pause(3000);
    let val = await ProfileScreen.profileImageIconIsDisplayed();
    expectChai(val).to.equal(true);


});


Then(/^login- sign in should be disabled$/, async () => {
    let val = await loginScreen.signBtnIsEnabled();
    expectChai(val).to.equal(false);

});


Then(/^login- a login page email error message '(.*)' should be shown$/, async (errorMessage) => {
    let ertxt = await loginScreen.loginErrMsg();
    expectChai(ertxt).to.equal(errorMessage);
});
