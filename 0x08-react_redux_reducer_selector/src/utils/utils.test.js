/* Tests for utilility(utils.js) functions with the jest library*/

import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

/* Test to check that the function getFullYear returns the correct year (be careful to not create a time bomb) */
describe('getFullYear', () => {
  it('Returns the current year', () => {
    /* Mocks the Date object to return a specific date for the test to ensure that the 
        current date is always 'October 31, 2023' for this test. This way the getFullYear 
        function will be tested in an isolated manner without being dependent on the current date, 
        thus avoiding potential time bomb issues in the test. */
    const mockDate = new Date('2023-10-31T12:00:00Z');
    global.Date = class extends Date {
      constructor() {
        super();
        return mockDate;
      }
    };
    // call the function and expect it to return the current year(i.e the mockDate)
    const year = getFullYear();
    expect(year).toEqual(2023);

    /* This will restore the original Date object so that other test will 
        not be affected by the mockDate */
    global.Date = Date;
  });
});

/* Test to check that getFooterCopy returns the correct string when the argument is true or false */
describe('getFooterCopy', () => {
  // describe() function is used to group the test cases for getFooterCopy function.
  it('returns the correct string when the argument is true or false', () => {
    //The output that shows the test is successful
    const result = getFooterCopy(true); // calls getFooterCopy with 'true' as an arg and use "expect" to assert that the returned string is as expected
    expect(result).toBe('Holberton School');
  });

  it('returns the correct string when the argument is true or false', () => {
    const result = getFooterCopy(false);
    expect(result).toBe('Holberton School main dashboard');
  });
});

//Test checking the returned string for getLatestNotification()
describe('getLatestNotification', () => {
  it('Returns a string', () => {
    const result = getLatestNotification(); // stores a refernce of the function.
    const textWithoutHTML = result.replace(/<[^>]+>/g, ''); // REGEX to Remove HTML tags rom the string returned by the function in the unction deinition
    // Defines the expected text without HTML tags
    const expectedResult = 'Urgent requirement - complete by EOD';
    expect(textWithoutHTML).toBe(expectedResult);
  });
});
