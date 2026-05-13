import { WaelioUtils } from 'waelio-utils';

const payload = 'just_test';

document.getElementById('test').innerHTML += '<br>' + payload;
document.getElementById('camelToSnake').innerHTML += '<br>' + WaelioUtils._camelToSnake(payload);
document.getElementById('snakeToCamel').innerHTML += '<br>' + WaelioUtils._snakeToCamel(payload);
document.getElementById('generateId').innerHTML += '<br>' + WaelioUtils._generateId();

const a = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

document.getElementById('rotate').innerHTML = '<br><pre>' + JSON.stringify(WaelioUtils._rotateArray(a).reverse()) + '</pre>';
