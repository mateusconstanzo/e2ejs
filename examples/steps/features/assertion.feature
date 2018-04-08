Feature: Assertion Steps 

Scenario: Assertion e2ejs
    Then I navigate to "http://localhost:8080/assertion.html"
    Then element having id "btn-save" should have text as "Save"
    Then element having id "btn-save" should not have text as "Update"
    Then element having id "btn-save" should have partial text as "ve"
    Then element having id "btn-save" should not have partial text as "te"
    Then element having name "btn-action" should have attribute "type" with value "submit"
    Then element having name "btn-action" should have attribute "type" with partial value "mit"
    Then element having name "btn-action" should not have attribute "type" with value "reset"
    Then element having name "btn-action" should not have attribute "type" with partial value "set"
    Then element having class "fields" should be enabled
    Then element having class "field-disable" should be disabled
    Then element having class "fields" should be present
    Then element having id "field-name" should not be present
    Then element having id "btn-update" should not exist
    Then element having css ".car" should be checked
    Then element having name "vehicle2" should be unchecked
    Then link having text "Update User" should be present
    Then link having text "Save User" should not be present
    Then link having partial text "ate Us" should be present
    Then link having partial text "ave Us" should not be present
    Then option "Chevrolet" by text from dropdown having name "select" should be selected
    Then option "chevrolet" by value from dropdown having name "select" should be selected
    Then option "Audi" by text from dropdown having name "select" should be unselected
    Then option "audi" by value from dropdown having name "select" should be unselected
    Then radio button having name "campo3" should be selected
    Then radio button having name "campo4" should be unselected
    Then I expect to see "Test see" on page