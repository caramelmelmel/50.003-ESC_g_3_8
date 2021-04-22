const RegexTest = require('regex-test');
 
const regex = new RegexTest({
  timeout: 500, // ms
  safeRegexOnly: true,
});

// dd 01-31
// mm 01-12
// yyyy 2000 onwards
// yyyy-mm-dd format
const pattern = /^(20)\d\d[-](0[1-9]|1[012])[-](0[1-9]|[12][0-9]|3[01])$/;

// (EXPECTS PASS) - uses yyyy-mm-dd
it('(PASS) - uses yyyy-mm-dd', () => {
    const date = '2021-12-31'; 
    expect(date).toMatch(pattern);
  });

// (EXPECTS FAIL) - uses yyyy/mm/dd
it('(FAIL) - uses yyyy/mm/dd', () => {
    const date = '2021/12/31'; 
    expect(date).toMatch(pattern);
  });

// (EXPECTS FAIL) - uses yyyy.mm.dd
it('(FAIL) - uses yyyy.mm.dd', () => {
    const date = '2021.12.31'; 
    expect(date).toMatch(pattern);
  });

// (EXPECTS FAIL) - uses dd/mm/yyyy
it('(FAIL) - uses dd/mm/yyyy', () => {
    const date = '31/12/2021'; 
    expect(date).toMatch(pattern);
  });

// (EXPECTS FAIL) - uses dd-mm-yyyy
it('(FAIL) - uses dd-mm-yyyy', () => {
    const date = '05-08-2038'; 
    expect(date).toMatch(pattern);
  });

// (EXPECTS FAIL) - uses dd.mm.yyyy
it('(FAIL) - uses dd.mm.yyyy', () => {
    const date = '23.10.2074'; 
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
