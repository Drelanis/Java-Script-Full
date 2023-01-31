import importType from 'eslint-plugin-import/lib/core/importType';
import { reverseArray, withdraw, getAdults } from './index';

it('should reverse an array', () => {
  const inputArray = [1, 2, 3, 4, 5];
  expect(reverseArray(inputArray)).toEqual([5, 4, 3, 2, 1]);
  expect(reverseArray('[1, 2, 3, 4, 5]')).toEqual(null);
  expect(inputArray).toEqual([1, 2, 3, 4, 5]);
});

it("must return the client's balance after withdraw", () => {
  expect(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50)).toEqual(37);
  expect(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10)).toEqual(-1);
});

it('must filter the object by adult customers', () => {
  const inputObject = { 'John Doe': 19, Tom: 17, Bob: 18 };
  expect(getAdults(inputObject)).toEqual({ 'John Doe': 19, Bob: 18 });
  expect(inputObject).toEqual({ 'John Doe': 19, Tom: 17, Bob: 18 });
  expect(getAdults({})).toEqual({});
});
