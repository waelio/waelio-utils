import { _encrypt,_decrypt } from '../index';

test('_decrypt', () => {
  const payloads: { [key: string]: any } = [
    { payload1: '123456' },
    { payload11: '123456' },
    { payload2: 'بسم اللله الرحمن الرحيم' },
    { payload3: '以仁慈的安拉的名义' },
    { payload4: 'Peace Marshal Wahbeh' },
  ];

  const randomKeys: string[] = [
    'hello',
    'secret-password',
    'واحد اللله',
    'ברוך אתה',
    'привет',
    '你好'
  ]
  for (let index = 0; index < payloads.length; index++) {
    for (let indexx = 0; indexx < randomKeys.length; indexx++) {
      // enc
      let enc = _encrypt(payloads[index],randomKeys[indexx]);
      expect(_decrypt(enc as string,randomKeys[indexx])).toEqual(payloads[index])      
    }
  }
});
