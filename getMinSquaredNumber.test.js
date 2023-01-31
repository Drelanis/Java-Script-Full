import { getMinSquaredNumber } from './getMinSquaredNumber.js';

it('should get min squared number', () => {
  expect(getMinSquaredNumber([-777, 3, -2, 6, 45, -20])).toEqual(4);
  expect(getMinSquaredNumber('[-777, 3, -2, 6, 45, -20]')).toEqual(null);
  expect(getMinSquaredNumber([])).toEqual(null);
});
