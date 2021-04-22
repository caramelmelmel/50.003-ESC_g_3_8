const RegexTest = require('regex-test');
 
const regex = new RegexTest({
  timeout: 500, // ms
  safeRegexOnly: true,
});

const pattern = /^\w{0,}@singhealth\.com\.sg$/;

// (EXPECTS PASS) - letters accepted
it('(EXPECTS PASS) - letters accepted', () => {
  const email = 'example@singhealth.com.sg'; 
  expect(email).toMatch(pattern);
});

// (EXPECTS PASS) - underscore accepted
it('(EXPECTS PASS) - underscore accepted', () => {
    const email = 'my_name@singhealth.com.sg'; 
    expect(email).toMatch(pattern);
});

// (EXPECTS PASS) - numbers accepted
it('(EXPECTS PASS) - numbers accepted', () => {
  const email = '123123@singhealth.com.sg';
  expect(email).toMatch(pattern);
});

// (EXPECTS FAIL) - inverted comma not accepted
it('(EXPECTS FAIL) - inverted comma not accepted', () => {
  const email = '"invertedcomma"@singhealth.com.sg'; 
  expect(email).toMatch(pattern);
});

// (EXPECTS FAIL) - space infront not allowed
it('(EXPECTS FAIL) - space infront not allowed', () => {
    const email = '   my_name@singhealth.com.sg'; 
    expect(email).toMatch(pattern);
});

// (EXPECTS FAIL) - spaces not allowed
it('(EXPECTS FAIL) - spaces not allowed', () => {
  const email = 'my name@singhealth.com.sg'; 
  expect(email).toMatch(pattern);
});
 
// (EXPECTS FAIL) - no "@singhealth.com.sg"
it('(EXPECTS FAIL) - no "@singhealth.com.sg"', () => {
  const email = 'example@singhealth.com'; 
  expect(email).toMatch(pattern);
});