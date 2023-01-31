import importType from 'eslint-plugin-import/lib/core/importType';
import { getEvenNumbers } from './index.js';

it('17 is equal 17', () => {
  expect(17).toEqual(17);
});

it('17 is not equal 18', () => {
  expect(17).not.toEqual(18);
});

it('should get return even numbers from array', () => {
  const result = getEvenNumbers([1, 2, 3, 4, 5]);
  expect(result).toEqual([2, 4]);
});
