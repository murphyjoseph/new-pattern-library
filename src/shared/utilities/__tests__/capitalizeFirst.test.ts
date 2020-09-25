import { capitalizeFirst } from '../capitalizeFirst';

describe('#capitalizeFirst', () => {
  it('should return string with the first letter capitalized', () => {
    const str = 'everything\'s coming up milhouse';
    const expected = 'Everything\'s coming up milhouse';
    const actual = capitalizeFirst(str);
    expect(actual).toEqual(expected);
  });
  it('should handle empty string', () => {
    const str = '';
    const expected = '';
    const actual = capitalizeFirst(str);
    expect(actual).toEqual(expected);
  })
});
