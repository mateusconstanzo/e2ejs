Feature: Search on Google

Scenario: Search e2ejs
    Then I navigate to "http://www.google.com.br"
    Then I enter "mateusconstanzo/e2ejs" into input field having id "lst-ib"
    Then I wait "1" seconds
    Then I click on element having name "btnK"
    Then I click on link having partial text "GitHub - mateusconstanzo/e2ejs"
    Then I expect to see "mateusconstanzo/e2ejs" on page