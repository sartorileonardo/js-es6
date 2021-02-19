//Install mocha to your project: npm i chai mocha --save

/*
Updated package.json file:
  "scripts": {
    "test": "mocha ./test.js"
  },
*/

//Run: npm run test

const chai = require('chai');
const expect = chai.expect;

const calculator = require('./calculator');

describe('Calculator Tests', () => {
    describe('Addition', () => {
        it('10 + 10 should be equals to 20', () => {
            expect(calculator.sum(10, 10)).to.equal(20)
        })
    }),
    describe('Subtration', () => {
        it('10 - 10 should be equals to 0', () => {
            expect(calculator.sub(10, 10)).to.equal(0)
        })
    }),
    describe('Multiplication', () => {
        it('10 * 10 should be equals to 100', () => {
            expect(calculator.mult(10, 10)).to.equal(100)
        })
    }),
    describe('Division', () => {
        it('100 / 10 should be equals to 10', () => {
            expect(calculator.div(100, 10)).to.equal(10)
        })
    })

});

