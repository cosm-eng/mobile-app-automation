const {Given, When, Then} = require("@wdio/cucumber-framework");
const homeScreen = require("../screenobjects/home.screen");
const loginScreen = require("../screenobjects/login.screen");
const ProfileScreen = require("../screenobjects/Profile.screen");
const tabNav = require("../screenobjects/tabNav");
import {expect as expectChai} from 'chai'
import {Context} from '../data/context';
import EnvSelectionBottomSheetScreen from '../screenobjects/EnvSelectionBottomSheet.screen';


Given(/^I am on the welcome screen$/, async () => {

    const val = await Context.Envs["environment"]
    // await loginScreen.login(user.email, user.password);
    console.log('++++++++++++++++++++++++++')
    console.log('++++++++++++++++++++++++++')
    console.log(val.env)
    console.log('++++++++++++++++++++++++++')
    console.log('++++++++++++++++++++++++++')
    await browser.pause(5000);
    await homeScreen.clickEnvSelectionButton();
    await EnvSelectionBottomSheetScreen.selectEnv(val.env)
    // await EnvSelectionBottomSheetScreen.selectQaEnv();
    await EnvSelectionBottomSheetScreen.clickRestartAppButton();
    await browser.pause(10000);
    await homeScreen.clickExploreButton();
    await tabNav.clickProfileIcon();
});
