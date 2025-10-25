Feature: Categories Management

  Scenario: Get list of distinct categories
    Given I have items with categories "Fruits", "Vegetables", and "Dairy"
    When I request the categories endpoint
    Then I should receive a list of categories containing "Fruits", "Vegetables", and "Dairy"
