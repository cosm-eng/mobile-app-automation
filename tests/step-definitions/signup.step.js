import {expect as expectChai} from 'chai';
import signupScreen from '../screenobjects/signup.screen';

const {Given, When} = require('@wdio/cucumber-framework');
const homeScreen = require('../screenobjects/home.screen');
const loginScreen = require('../screenobjects/login.screen');
const ProfileScreen = require('../screenobjects/Profile.screen');
const tabNav = require('../screenobjects/tabNav');

Given(/^signup - I am on the welcome screen$/, async () => {
    await browser.pause(7000);
    await homeScreen.clickExploreButton();
    await tabNav.clickProfileIcon();
});

When(/^signup - user clicks on sign up button$/, async () => {
    await signupScreen.clickSignupButton();
});

When(/^signup - user enters the '(.*)' , '(.*)', '(.*)' and '(.*)'$/, async (firstname, lastname, email, pwd) => {
    await signupScreen.enterFirstName(firstname);
    await signupScreen.enterLastName(lastname);
    await signupScreen.enterEmailField(email);
    await signupScreen.enterPassword(pwd);
});

When(/^signup - click on sign in button$/, async () => {
    await signupScreen.clickSignInButton();
});

When(/^signup - validate the error message '(.*)'$/, async (errormesaage) => {
    await browser.pause(5000);
    const val = await signupScreen.verifyLoginErrorMessage();
    expectChai(val).to.equal(true);
});

When(/^signup - validate the password validation message conatainer is present$/, async () => {
    const val = await signupScreen.verifySignUpMshContainerIsDisplayed();
    expectChai(val).to.equal(true);
});
