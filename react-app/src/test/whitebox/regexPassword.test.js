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

// (EXPECTS FAIL) - upper with number
it('(EXPECTS FAIL) - upper with number', () => {
  const password = 'PASSWORD123'; 
  expect(password).toMatch(pattern);
});
 
// (EXPECTS FAIL) - symbol with number
it('(EXPECTS FAIL) - lower with number', () => {
  const password = '12345!@#$%'; 
  expect(password).toMatch(pattern);
});

// (EXPECTS FAIL) - upper + symbol + number
it('(EXPECTS FAIL) - upper + symbol + number', () => {
  const password = 'PASSWORD123!@#'; 
  expect(password).toMatch(pattern);
});
 
// (EXPECTS FAIL) - lower + symbol + number
it('(EXPECTS FAIL) - lower + symbol + number', () => {
  const password = 'password123!@#'; 
  expect(password).toMatch(pattern);
});

// (EXPECTS FAIL) - upper + lower + symbol
it('(EXPECTS FAIL) - upper + lower + symbol', () => {
  const password = 'PASSWORDpw!@#'; 
  expect(password).toMatch(pattern);
});
 
// (EXPECTS FAIL) - upper + lower + number
it('(EXPECTS FAIL) - upper + lower + number', () => {
  const password = 'passwordpw123'; 
  expect(password).toMatch(pattern);
});

// (EXPECTS FAIL) - uppercase and lowercase
it('(EXPECTS FAIL) - uppercase and lowercase', () => {
  const password = 'Password'; 
  expect(password).toMatch(pattern);
});
