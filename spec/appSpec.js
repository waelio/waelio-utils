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
