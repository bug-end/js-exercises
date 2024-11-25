import * as chai from 'chai';
const assert = chai.assert;
chai.config.truncateThreshold = 0;

/* 
Your goal is to implement a difference function, which subtracts one list from another and returns the result. It should remove all values from list a, which are present in list b keeping their order.
arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:
arrayDiff([1,2,2,2,3],[2]) == [1,3]
*/

const arrayDiff = (a, b) => a.filter((x) => !b.includes(x));

// Test cases

describe('Basic tests', () => {
  it('Should pass Basic tests', () => {
    assert.deepEqual(arrayDiff([1, 2], [1]), [2], 'a was [1,2], b was [1]');
    assert.deepEqual(arrayDiff([1, 2, 2], [1]), [2, 2], 'a was [1,2,2], b was [1]');
    assert.deepEqual(arrayDiff([1, 2, 2], [2]), [1], 'a was [1,2,2], b was [2]');
    assert.deepEqual(arrayDiff([1, 2, 2], []), [1, 2, 2], 'a was [1,2,2], b was []');
    assert.deepEqual(arrayDiff([], [1, 2]), [], 'a was [], b was [1,2]');
    assert.deepEqual(arrayDiff([1, 2, 3], [1, 2]), [3], 'a was [1,2,3], b was [1,2]');
  });
});
