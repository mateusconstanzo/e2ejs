Feature: To search cucumber in google

@CucumberScenario
Scenario: Cucumber Google Search
Then I navigate to "http://www.google.com.br"
When I enter "carro" into input field having id "lst-ib"
When I click on element having name "btnK"
When I click on link having text "Notícias sobre Carros | EXAME"
