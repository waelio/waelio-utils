"use strict"

import { _config } from '../index';

test('testing config', () => {
  const dummys = ['test1', 'hot_cold', 'test1 test 2'];
  const envvs = ['client', 'dev', 'server'];

  for (let index = 0; index < dummys.length; index++) {
    for (let indexx = 0; indexx < envvs.length; indexx++) {
      let tst = _config.set(`${envvs[indexx]}:${dummys[index]}`, dummys[index]);
      expect(_config.get(`${envvs[indexx]}:${dummys[index]}`)).toEqual(dummys[index]);
    }
  }
});
