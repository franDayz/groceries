Feature: Grocery Program Management

  Scenario: Add an item to a new grocery program
    Given I navigate to the landing page
    And I create a grocery program "Weekly Groceries"
    And I see "Weekly Groceries" as heading
    When I add the item "Bananas" with category "Fruits"
    Then I see "Bananas" in the list of items