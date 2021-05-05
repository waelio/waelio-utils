const waelioUtils = require('../main')
// console.log('waelioUtils', waelioUtils)

describe('waelioUtils must be an object', function () {
  it('Must be Object', function () {
    expect(waelioUtils).toBeTruthy()
  })
})

const { sniffId } = waelioUtils
describe('sniffId function from WaelioUtils', function () {
  it('should a be 1234', function () {
    var response = { _id: 1234, name: 'John' }
    var newId = sniffId(response)
    expect(newId).toEqual(1234)
  })
  it('should a be false', function () {
    var response = { ID: 1234, name: 'John' }
    var newId = sniffId(response)
    expect(newId).toBe(false)
  })
})

const { _equals } = waelioUtils
describe('_equals function WaelioUtils', function () {
  it('should be false', () => {
    const array1 = [123456]
    const array2 = [123455]
    const test = _equals(array1, array2)
    expect(test).toBe(false)
  })
  it('should be true', () => {
    const array1 = [123456]
    const array2 = [123456]
    const test = _equals(array1, array2)
    expect(test).toBe(true)
  })
})

const { _repeat } = waelioUtils
describe('_repeat from waelioUtils', () => {
  it('should be 5', () => {
    let counter = 0
    const f1 = () => counter++
    _repeat(5)(f1)
    expect(counter).toEqual(5)
  })
})

const { _cleanResponse } = waelioUtils
describe('clean response from waelioUtils', () => {
  const axios = require('axios')
  const testEndpoint = 'https://api.picmymenu.com/restaurants'
  it('should clean response', async () => {
    const response = await axios(testEndpoint)
    const test = _cleanResponse(response)
    // console.log(test)
    expect(test.data).toBeTruthy()
    expect(test.data.length).toBeTruthy()
  })
})

const { _to } = waelioUtils
describe('deconstruct response method from waelioUtils', () => {
  const axios = require('axios')
  const testEndpoint = 'https://api.picmymenu.com/restaurants'
  it('should create promise', async () => {
    const response = await _to(axios(testEndpoint))
    const test = ([reject, resolve] = response)
    console.log(reject)
    console.log(resolve)
    // expect(test.data).toBeTruthy()
    // expect(test.data.length).toBeTruthy()
  })
})
