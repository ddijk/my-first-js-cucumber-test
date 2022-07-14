const { Given, When, Then, After } = require('@cucumber/cucumber')
const chai = require('chai');
const expect = chai.expect
let vandaag = 'leeg';
let response = 'leeg'
Given('today is {string}', function (today) {
    vandaag = today;
});

When('I ask whether it\'s Friday yet', function () {

    response = isFriday();
});

Then('I should be told {string}', function (expected) {
    expect(response).to.equal(expected);
});


const isFriday = () => {
    const days = ['Friday', 'Sunday', 'Monday']
    if (!days.includes(vandaag)) {
        return 'Invalid Day';
    }
    return (vandaag == 'Friday') ? "TGIF" : "Nope"
} 