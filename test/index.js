var controller = require('../controller/primeController')
var chai = require('chai')
var should = chai.should()
var chaiArrays = require('chai-arrays')
chai.use(chaiArrays)

describe('Testing Data Type', function () {
  it('primeFactor should be a function', function () {
    controller.primeFactor.should.be.a('function')
  })
  it('primeFactor should be return as arrays', function () {
    controller.primeFactor(6).should.be.a('array')
  })
})

describe('Testing Result', function () {
  it('Result should be [3] when input 3 ', function () {
    controller.primeFactor(3).should.be.equal([3])
  })
  it('Result should be [2,3] when input 6 ', function () {
    controller.primeFactor(6).should.be.equal([2,3])
  })
  it('Result should be [2,2,2] when input 8 ', function () {
    controller.primeFactor(8).should.be.equal([2,2,2])
  })
  it('Result should be [5,5] when input 25 ', function () {
    controller.primeFactor(25).should.be.equal([5,5])
  })
  it('Result should be [3,3,41,333667] when input 123123123 ', function () {
    controller.primeFactor(123123123).should.be.equal([3,3,41,333667])
  })
})

describe('Testing Length Result', function () {
  it('Length Result should be 1 when input 3 ', function () {
    controller.primeFactor(3).should.be.ofSize(1)
  })
  it('Length Result should be 2 when input 6 ', function () {
    controller.primeFactor(6).should.be.ofSize(2)
  })
  it('Length Result should be 3 when input 8 ', function () {
    controller.primeFactor(8).should.be.ofSize(3)
  })
  it('Length Result should be 2 when input 25 ', function () {
    controller.primeFactor(25).should.be.ofSize(2)
  })
  it('Length Result should be 4 when input 123123123 ', function () {
    controller.primeFactor(123123123).should.be.ofSize(4)
  })
})
