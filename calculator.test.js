import importType from 'eslint-plugin-import/lib/core/importType';
import { getSquaredArray, getOddNumbers, getSum } from './calculator.js';

it('should get squarred numbers in array', () => {
  const result = getSquaredArray([1, 2, 3, 4]);
  expect(result).toEqual([1, 4, 9, 16]);
});

it('should get odd numbers in array', () => {
  const result = getOddNumbers([1, 2, 3, 4]);
  expect(result).toEqual([1, 3]);
});

it('should get sum numbers in array', () => {
  const result = getSum(1, 7);
  expect(result).toEqual(8);
});
