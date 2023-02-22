Feature: Tickets ordering flow



  Scenario Outline: Order a ticket for the event
    Given I launched the app and on discover events page as a logged in user with '<email>' and '<password>'
    When I select an event from the upcoming events list
    And on ticket information  page I click on get tickets
    And on select seat page , i select the number of ticket
    And on checkout page, I add a payment card
    And I complete the order
    And I verify the complete order success message '<successmsg>' and verify tickets button
    And I click on view button to verify the My tickets bottom sheet is present

        Examples:
      | email               | password  | successmsg|
      | qacosm024@gmail.com | Monika@123   |Your order is complete!|


