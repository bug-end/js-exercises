import { expect } from 'chai';

// This function returns a boolean if the given numbers can form a triangle.

const isTriangle = (a, b, c) => a + b > c && a + c > b && b + c > a;

// Test cases
describe('isTriangle', () => {
  it('should return true if the given numbers can form a triangle', () => {
    expect(isTriangle(1, 2, 2)).to.equal(true);
    expect(isTriangle(4, 2, 3)).to.equal(true);
    expect(isTriangle(2, 2, 2)).to.equal(true);
    expect(isTriangle(1, 2, 3)).to.equal(false);
    expect(isTriangle(-5, 1, 3)).to.equal(false);
    expect(isTriangle(0, 2, 3)).to.equal(false);
    expect(isTriangle(1, 2, 9)).to.equal(false);
  });
});
