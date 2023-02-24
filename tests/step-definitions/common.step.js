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
