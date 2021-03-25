const RegexTest = require('regex-test');
 
const regex = new RegexTest({
  timeout: 500, // ms
  safeRegexOnly: true,
});

const pattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

// EXPECTS PASS) - one upper + lower + num + symb
it('(EXPECTS PASS) - one upper + lower + num + symb', () => {
  const password = 'Password123!'; 
  expect(password).toMatch(pattern);
});

// (EXPECTS FAIL) - all lower case
it('(EXPECTS FAIL) - all lower case', () => {
    const password = 'passwordlowercase'; 
    expect(password).toMatch(pattern);
});

// EXPECTS FAIL) - all upper case
it('EXPECTS FAIL) - all upper case', () => {
  const password = 'PASSWORDUPPERCASE'; 
  expect(password).toMatch(pattern);
});

// (EXPECTS FAIL) - space in password
it('(EXPECTS FAIL) - space in password', () => {
    const password = 'my password'; 
    expect(password).toMatch(pattern);
});

// (EXPECTS FAIL) - upper and lower case but no symbol
it('(EXPECTS FAIL) - upper and lower case but no symbol', () => {
  const password = '"Password'; 
  expect(password).toMatch(pattern);
});
 
// (EXPECTS FAIL) - upper with symbol
it('(EXPECTS FAIL) - upper with symbol', () => {
  const password = 'PASSWORD!'; 
  expect(password).toMatch(pattern);
});
 
// (EXPECTS FAIL) - lower with symbol
it('(EXPECTS FAIL) - lower with symbol', () => {
  const password = 'password!'; 
  expect(password).toMatch(pattern);
});