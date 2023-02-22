import {expect as expectChai} from 'chai';
import eventInfoScreen from '../screenobjects/EventInfo.screen';
import selectTicketScreen from '../screenobjects/SelectTicket.screen';
import upcomingEventScreen from '../screenobjects/UpcomingEvent.screen';
import checkoutScreen from '../screenobjects/Checkout.screen';
import PaymentCardBottomSheetScreen from '../screenobjects/PaymentCardBottomSheet.screen';
import loginScreen from '../screenobjects/login.screen';
import tabNav from '../screenobjects/tabNav';
import homeScreen from '../screenobjects/home.screen';
import MyTicketBottomSheetScreen, {myTicketBottomSheetIsDisplayed} from '../screenobjects/MyTicketBottomSheet.screen';
import OrderConfirmationScreen from '../screenobjects/OrderConfirmation.screen';

const {Given, When, Then} = require('@wdio/cucumber-framework');

Given(/^I launched the app and on discover events page as a logged in user with '(.*)' and '(.*)'$/, async (email, password) => {
    await browser.pause(5000);
    await homeScreen.clickExploreButton();
    await browser.pause(2000);
    await tabNav.clickProfileIcon();
    await loginScreen.login(email, password);
    await loginScreen.clickSignInButton();
});


When(/^I select an event from the upcoming events list$/, async () => { // click on discover button
    await tabNav.clickDiscoverIcon();
    await upcomingEventScreen.clickFirstEvent();
});


When(/^on ticket information  page I click on get tickets$/, async () => {
    await eventInfoScreen.clickGetTicketsButton();
});


When(/^on select seat page , i select the number of ticket$/, async () => {
    await selectTicketScreen.clickPlusIconVipZone();
    await selectTicketScreen.clickGetTicketsButton();
});


When(/^on checkout page, I add a payment card$/, async () => {
    await checkoutScreen.clickPaymentMethodButton();
    await PaymentCardBottomSheetScreen.selectVisaCard();
});


When(/^I complete the order$/, async () => {
    await checkoutScreen.clickCompleteOrderButton();
    await browser.pause(5000);


});


When(/^I verify the complete order success message '(.*)' and verify tickets button$/, async (successMessage) => {
    await OrderConfirmationScreen.isViewTicketsDisplayed();
    await OrderConfirmationScreen.yourOrderCompleteMessageIsDisplayed();
    await OrderConfirmationScreen.yourOrderCompleteMessageTextVerification(successMessage);

    // orderConfirmationScreen.isViewTicketsDisplayed();
    // const btn = await orderConfirmationScreen.isViewTicketsDisplayed();
    // expectChai(btn).to.equal(true);
    // await orderConfirmationScreen.yourOrderCompleteMessageIsDisplayed();
    // await orderConfirmationScreen.yourOrderCompleteMessageTextVerification(successMessage);
});


When(/^I click on view button to verify the My tickets bottom sheet is present$/, async () => {
    await OrderConfirmationScreen.clickViewTicketButton();
    await MyTicketBottomSheetScreen.myTicketBottomSheetIsDisplayed();
    // await orderConfirmationScreen.clickViewTicketButton();
    // const val2 = await MyTicketBottomSheetScreen.myTicketBottomSheetIsDisplayed();
    // expectChai(val1).to.equal(true);
});
