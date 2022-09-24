import { _encrypt,_decrypt } from '../index';

test('_decrypt', () => {
  const payload1 = 'many_لغات_שונות';
  const payload11 = '123456';
  const payload2 = 'بسم اللله الرحمن الرحيم';
  const payload3 = '以仁慈的安拉的名义';
  
  const payload1_encrypted = _encrypt(payload1);
  const payload11_encrypted = _encrypt(payload11);
  const payload2_encrypted = _encrypt(payload2);
  const payload3_encrypted = _encrypt(payload3);

  expect(_decrypt( payload1_encrypted  )).toEqual(payload1);
  expect(_decrypt( payload11_encrypted )).toEqual(payload11);
  expect(_decrypt( payload2_encrypted  )).toEqual(payload2);
  expect(_decrypt( payload3_encrypted  )).toEqual(payload3);
});
