import { expect } from 'chai';

// You get an array of numbers, return the sum of all of the positives ones.
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
// Note: if there is nothing to sum, the sum is default to 0.

const positiveSum = (arr) => arr.reduce((acc, curr) => (curr > 0 ? acc + curr : acc), 0);

// Test cases
describe('positiveSum', () => {
  it('should return the sum of positive numbers in an array', () => {
    expect(positiveSum([1, -4, 7, 12])).to.equal(20);
  });

  it('should return 0 if there are no positive numbers in the array', () => {
    expect(positiveSum([-1, -2, -3])).to.equal(0);
  });

  it('should return 0 if the input array is empty', () => {
    expect(positiveSum([])).to.equal(0);
  });
});
