const RegexTest = require('regex-test');
 
const regex = new RegexTest({
  timeout: 500, // ms
  safeRegexOnly: true,
});

const pattern = /^\w{0,}@(google|yahoo)\.com(\.sg)?$/;


// (EXPECTS PASS) - yahoo.com.sg
it('(EXPECTS PASS) - yahoo.com.sg)', () => {
    const email = 'example@yahoo.com.sg'; 
    expect(email).toMatch(pattern);
});

// (EXPECTS PASS) - yahoo.com
it('(EXPECTS PASS) - yahoo.com)', () => {
    const email = 'example@yahoo.com'; 
    expect(email).toMatch(pattern);
});

// (EXPECTS PASS) - google.com.sg
it('(EXPECTS PASS) - google.com.sg)', () => {
    const email = 'example@google.com.sg'; 
    expect(email).toMatch(pattern);
});

// (EXPECTS PASS) - google.com
it('(EXPECTS PASS) - google.com)', () => {
    const email = 'example@google.com'; 
    expect(email).toMatch(pattern);
});

// (EXPECTS FAIL) - singhealth.com.sg
it('(EXPECTS FAIL) - singhealth.com.sg)', () => {
    const email = 'example@singhealth.com.sg'; 
    expect(email).toMatch(pattern);
});

// (EXPECTS FAIL) - singhealth.com
it('(EXPECTS FAIL) - singhealth.com)', () => {
    const email = 'example@singhealth.com'; 
    expect(email).toMatch(pattern);
});

// (EXPECTS PASS) - underscore accepted
it('(EXPECTS PASS) - underscore accepted', () => {
    const email = 'my_name@google.com.sg'; 
    expect(email).toMatch(pattern);
});

// (EXPECTS PASS) - numbers accepted
it('(EXPECTS PASS) - numbers accepted', () => {
  const email = '123123@google.com.sg'; 
  expect(email).toMatch(pattern);
});

// (EXPECTS FAIL) - space infront not allowed
it('(EXPECTS FAIL) - space infront not allowed', () => {
    const email = '   my_name@google.com.sg'; 
    expect(email).toMatch(pattern);
});

// (EXPECTS FAIL) - inverted comma not accepted
it('(EXPECTS FAIL) - inverted comma not accepted', () => {
  const email = '"invertedcomma"@google.com.sg'; 
  expect(email).toMatch(pattern);
});
 
// (EXPECTS FAIL) - "@singhealth.com.sg"
it('(EXPECTS FAIL) - "@singhealth.com.sg"', () => {
  const email = 'example@singhealth.com.sg'; 
  expect(email).toMatch(pattern);
});

// (EXPECTS FAIL) - spaces not allowed
it('(EXPECTS FAIL) - spaces not allowed', () => {
  const email = 'my name@singhealth.com.sg'; 
  expect(email).toMatch(pattern);
});