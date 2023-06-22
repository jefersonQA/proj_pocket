Feature: Product Detail Page tests
	As a customer, I want to test the product detail page functionalities

    Background:
		Given I'm on the product detail page

	Scenario: Validate price block 
		Then the product value is visible

	Scenario: Validate product image
		Then The product image should be displayed