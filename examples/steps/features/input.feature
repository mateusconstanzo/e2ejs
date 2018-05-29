Feature: Input Steps 

Scenario: Input e2ejs
    Then I navigate to "http://localhost:8080/input.html"
    When I enter "Mateus Constanzo" into input field having name "field-name"
    When I clear input field having name "field-clear"
    When I select option "Audi" by text from dropdown having $ ".combo"
    When I select option "audi" by value from dropdown having class "combo"
    