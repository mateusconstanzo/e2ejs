Feature: To search cucumber in google

@CucumberScenario
Scenario: Cucumber Google Search
Then I navigate to "http://www.google.com.br"
When I enter "carro" into input field having id "lst-ib"
When I click on element having name "btnK"
When I click on link having text "Notícias sobre Carros | EXAME"


Feature: To search cucumber in google

@CucumberScenario
Scenario: Cucumber Google Search
When I enter "test@liferay.com" into input field having id "email"
When I enter "senha" into input field having id "password"
When I click on element having id "login-button"
Then element having class "menu-actions__toggle__text" should be present

Feature: To search cucumber in google

@CucumberScenario
Scenario: Cucumber Google Search
    When option "Saab" by text from dropdown having name "campo" should be selected
    Then radio button having name "campo3" should be selected
    Then link having text "Vida Loka" should be present
    Then element having name "xpto" should not exist