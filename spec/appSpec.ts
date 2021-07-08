const { waelioUtils } = require('../dist/waelioUtils');
console.log('waelioUtils', waelioUtils);

describe('waelioUtils must be an object', function () {
  it('Must be Object', function () {
    expect(waelioUtils).toBeTruthy();
  });
});

const { sniffId } = waelioUtils;
describe('sniffId function from WaelioUtils', function () {
  it('should a be 1234', function () {
    var response = { _id: 1234, name: 'John' };
    var newId = sniffId(response);
    expect(newId).toEqual(1234);
  });
  it('should a be false', function () {
    var response = { ID: 1234, name: 'John' };
    var newId = sniffId(response);
    expect(newId).toBe(false);
  });
});

const { _equals } = waelioUtils;
describe('_equals function WaelioUtils', function () {
  it('should be false', () => {
    const array1 = [123456];
    const array2 = [123455];
    const test = _equals(array1, array2);
    expect(test).toBe(false);
  });
  it('should be true', () => {
    const array1 = [123456];
    const array2 = [123456];
    const test = _equals(array1, array2);
    expect(test).toBe(true);
  });
});

const { _repeat } = waelioUtils;
describe('_repeat from waelioUtils', () => {
  it('should be 5', () => {
    let counter = 0;
    const f1 = () => counter++;
    _repeat(5)(f1);
    expect(counter).toEqual(5);
  });
});

const { _cleanResponse } = waelioUtils;
describe('clean response from waelioUtils', () => {
  const axios = require('axios');
  const testEndpoint = 'https://api.picmymenu.com/restaurants';
  it('should clean response', async () => {
    const response = await axios(testEndpoint);
    const test = _cleanResponse(response);
    // console.log(test)
    expect(test.data).toBeTruthy();
    expect(test.data.length).toBeTruthy();
  });
});

const { _To } = waelioUtils;
describe('deconstruct response method from waelioUtils', () => {
  const axios = require('axios');
  const testEndpoint = 'https://api.picmymenu.com/restaurants';
  it('should create promise', async () => {
    const response = await _To(axios(testEndpoint));
    // console.log('🚀 ~ file: appSpec.ts ~ line 69 ~ it ~ response', response);
    const [ reject, resolve ] = response;
    // console.log('reject', reject);
    // console.log('resolve', resolve);
    expect(response).toBeTruthy()
    expect(resolve).toBeTruthy()
    expect(reject).not.toBeTruthy()
    expect(resolve.data.length).toBeTruthy();
  });
});

const { _encrypt, _decrypt } = waelioUtils;
const salt = 'waelio';
const demo = {
  _id: '64d9a98ebe5e5a0cb74eb5c8',
  endpoint: 'https://fcm.googleapis.com/fcm/send/dTK-DWUdl-Y:APA91bH7P32zD4ghNBnsfsYCHMI9EyusgY5uxAjN1lNg9bJfAc-9lUDoxh7tTPXL53QGgAekxXLbJLOoE-PBFno1URfZPpaUCopIDhGGszdkFpo0MsPu2EIW1FooINHHbD_RwQWlC0ubrZC',
  expirationTime: null,
  keys: {
    p256dh: 'BCX_c6I0VPWaAl9kIV3Y0UGqqOYn6h0m7oOBTx0mwYPXdGanhk1J4stDpcRUWUZa2C66YL4LghsoUtMbfLv3YFA',
    auth: 'JWVlHgv2BRBdJc2Pnka_zz2Q'
  },
  createdAt: '2021-06-28T10:50:54.156Z',
  updatedAt: '2021-06-28T10:50:54.156Z',
  __v: 0
};

it('Should Encrypt a payload', async() => {
  const encrypted_text = await _encrypt(salt, demo); /*?*/
  // console.log("🚀 ~ file: appSpec.ts ~ line 95 ~ it ~ encrypted_text", encrypted_text)
  expect(encrypted_text).toBeTruthy();
  expect(encrypted_text).not.toEqual(demo);
});

it('Should Encrypt && decrypt a payload', async () => {
  const encrypted_text = await _encrypt(salt, demo); /*?*/
  // console.log("🚀 ~ file: appSpec.ts ~ line 102 ~ it ~ demo", demo)
  // console.log('------');
  // console.log('🚀 ~ file: appSpec.ts ~ line 103 ~ it ~ encrypted_text', encrypted_text);
  // console.log('------');
  const decrypted_string = await _decrypt(salt, encrypted_text); /*?*/
  // console.log('🚀 ~ file: appSpec.ts ~ line 105 ~ it ~ decrypted_string', await JSON.parse(decrypted_string));
  expect(encrypted_text).toBeTruthy();
  expect(decrypted_string).toBeTruthy();
  expect(demo).toEqual(JSON.parse(decrypted_string));
});
