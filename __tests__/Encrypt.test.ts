import { _encrypt, _decrypt } from '../index';

test('_encrypt', () => {
  const payload1 = 123456;
  const payload11 = '123456';
  const payload2 = 'بسم اللله الرحمن الرحيم';
  const payload3 = '以仁慈的安拉的名义';
  const payload4 = 'Peace Marshal Wahbeh';

  const payload1_encrypted = _encrypt(payload1);
  const payload11_encrypted = _encrypt(payload11);
  const payload2_encrypted = _encrypt(payload2);
  const payload3_encrypted = _encrypt(payload3);
  const payload4_encrypted = _encrypt(payload4);
  const decrypted_payload1 = _decrypt(payload1_encrypted);

  expect(payload1_encrypted).toBeTruthy();
  expect(decrypted_payload1).toBeTruthy();

  expect(decrypted_payload1).toBe(payload1.toString());
  expect(_decrypt(payload11_encrypted)).toEqual(payload11);
  expect(_decrypt(payload2_encrypted)).toEqual(payload2);
  expect(_decrypt(payload3_encrypted)).toEqual(payload3);
  expect(_decrypt(payload4_encrypted)).toEqual(payload4);
});
