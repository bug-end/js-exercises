import { expect } from 'chai';

// This function will break up camel casing, using a space between words.

const breakCamelCase = (str) => {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    // Check if current character is uppercase and not the first character
    if (str[i] === str[i].toUpperCase() && i > 0) {
      result += ' ' + str[i]; // Add space before uppercase letter
    } else {
      result += str[i];
    }
  }
  return result;
};

// Test cases
describe('breakCamelCase', () => {
  it('should break up camel casing', () => {
    expect(breakCamelCase('helloWorld')).to.equal('hello World');
    expect(breakCamelCase('breakCamelCase')).to.equal('break Camel Case');
  });
});
