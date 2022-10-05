/**
 * @jest-environment jsdom
 */

import { _encrypt, _decrypt } from '../index';

test('_encrypt', async () => {
  const payloads: { [key: string]: any } = [
    { payload1: '123456' },
    { payload11: '123456' },
    { payload2: 'بسم اللله الرحمن الرحيم' },
    { payload3: '以仁慈的安拉的名义' },
    { payload4: 'Peace Marshal Wahbeh' },
  ];

  for (let index = 0; index < payloads.length; index++) {
    // enc
    let enc = _encrypt(payloads[index]);
    expect(enc).toBeTruthy();
    expect(enc).toBeInstanceOf<string>
    expect(enc).not.toBeFalsy();
  }
});
