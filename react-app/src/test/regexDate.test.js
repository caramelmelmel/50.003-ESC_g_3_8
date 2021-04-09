const RegexTest = require('regex-test');
 
const regex = new RegexTest({
  timeout: 500, // ms
  safeRegexOnly: true,
});

// dd 01-31
// mm 01-12
// yyyy 2020 onwards
// dd/mm/yyyy format
const pattern = /^(0[1-9]|[12][0-9]|3[01])[/](0[1-9]|1[012])[/](20)[2-9][0-9]$/;

// (EXPECTS PASS)
it('(PASS)', () => {
    const date = '31/12/2021'; 
    expect(date).toMatch(pattern);
  });

// (EXPECTS FAIL) - uses dash
it('(FAIL) - uses dash', () => {
    const date = '01-01-2021'; 
    expect(date).toMatch(pattern);
  });

// (EXPECTS FAIL) - uses .
it('(FAIL) - uses .', () => {
    const date = '01.01.2021'; 
    expect(date).toMatch(pattern);
  });

// (EXPECTS FAIL) - year before 2020
it('(FAIL) - year before 2000', () => {
    const date = '01/01/2019'; 
    expect(date).toMatch(pattern);
  });

// (EXPECTS PASS) - year on 2020
it('(PASS) - year before 2020', () => {
    const date = '01/01/2020'; 
    expect(date).toMatch(pattern);
  });

// (EXPECTS FAIL) - more than required characters
it('(FAIL) - more than required characters', () => {
    const date = '12/12/20201'; 
    expect(date).toMatch(pattern);
  });

// (EXPECTS FAIL) - less than required characters
it('(FAIL) - less than required characters', () => {
    const date = '12/12/202'; 
    expect(date).toMatch(pattern);
  });
