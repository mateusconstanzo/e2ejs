Feature: To search cucumber in google

@CucumberScenario
Scenario: Cucumber Google Search
    When option "Saab" by text from dropdown having name "campo" should be selected
    Then radio button having name "campo3" should be selected
    Then link having text "Vida Loka" should be present
    Then element having name "xpto" should not exist