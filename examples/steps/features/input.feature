Feature: Input Steps 

Scenario: Input e2ejs
    Then I navigate to "http://localhost:8080/input.html"
    When I enter "Mateus Constanzo" into input field having name "field-name"
    Then I clear input field having name "field-clear"