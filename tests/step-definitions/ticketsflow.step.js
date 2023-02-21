import {expect as expectChai} from 'chai';
import eventInfoScreen from '../screenobjects/EventInfo.screen';
import selectTicketScreen from '../screenobjects/SelectTicket.screen';
import upcomingEventScreen from '../screenobjects/UpcomingEvent.screen';
import orderConfirmationScreen from '../screenobjects/OrderConfirmation.screen';
import checkoutScreen from '../screenobjects/Checkout.screen';
import PaymentCardBottomSheetScreen from '../screenobjects/PaymentCardBottomSheet.screen';
import loginScreen from '../screenobjects/login.screen';
import tabNav from '../screenobjects/tabNav';
import homeScreen from '../screenobjects/home.screen';

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
    await eventInfoScreen.clickGetTicketsButton();
    await selectTicketScreen.clickPlusIconVipZone();
    await selectTicketScreen.clickGetTicketsButton();
    await checkoutScreen.clickPaymentMethodButton();
    await PaymentCardBottomSheetScreen.selectSecondCard();
    await checkoutScreen.clickCompleteOrderButton();

    await orderConfirmationScreen.isViewTicketsDisplayed();


});
