Feature: Waiting Steps 

Scenario: Waiting e2ejs
    Then I navigate to "http://localhost:8080/waiting.html"
    Then I wait element having id "field-present" should not be present
    Then I wait element having id "field-not-present" should be present
    Then I wait "4" seconds