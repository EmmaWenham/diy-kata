const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  it('returns Yes or No', () => {
    expect(booleanToWord(true)).toBe('Yes');
    expect(booleanToWord(false)).toBe('No');
  });
});
