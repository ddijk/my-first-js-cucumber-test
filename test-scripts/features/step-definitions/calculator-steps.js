const { Given, When, Then, After } = require('@cucumber/cucumber')
const chai = require('chai');
const expect = chai.expect
let number1 = 0;
let number2 = 0;
let response = 0;


 Given('Number {int}', function (n1) {
    number1 = n1
  });

 Given('And Number {int}', function (n2) {
    number2 = n2
  });

 When('I ask to add these numbers', function () {
    response =  number1+number2;
  });

  Then('I should get {int}', function (expected) {
    expect(response).to.equal(expected);
});
