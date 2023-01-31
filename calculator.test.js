import importType from 'eslint-plugin-import/lib/core/importType';
import { calc } from './calculator.js';

it('must do basic math + - * /', () => {
  expect(calc(1)).toEqual(null);
  expect(calc([1, 2, 3])).toEqual(null);
  expect(calc({ a: 1 })).toEqual(null);
  expect(calc('6 + 6')).toEqual('6 + 6 = 12');
  expect(calc('6 - 6')).toEqual('6 - 6 = 0');
  expect(calc('6 * 6')).toEqual('6 * 6 = 36');
  expect(calc('6 / 6')).toEqual('6 / 6 = 1');
});
