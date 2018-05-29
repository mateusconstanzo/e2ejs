Feature: Navigation Steps 

Scenario: Navigation e2ejs
    Then I navigate to "http://localhost:8080"
    Then I refresh page
    Then I navigate forward
    Then I navigate back
    Then I refresh page
    Then I navigate to "http://localhost:8080/navigation.html"
    Then I expect a new tab to be open
    Then I switch to tab "1"
    #Then I close tab "1"