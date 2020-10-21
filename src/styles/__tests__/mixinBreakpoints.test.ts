import { mixinBreakpoints } from "../mixinBreakpoints"

describe('#mixinBreakpoints', () => {
  it('should apply under styles', () => {
    const actual = mixinBreakpoints('under', 'breakpoint2');
    const expected = '@media all and (max-width: 560px)';
    expect(actual).toEqual(expected);
  });
  it('should apply over styles', () => {
    const actual = mixinBreakpoints('over', 'breakpoint2');
    const expected = '@media all and (min-width: 560px)';
    expect(actual).toEqual(expected);
  });
  it('should apply null case', () => {
    const actual = mixinBreakpoints('blah', 'breakpoint2');
    const expected = '';
    expect(actual).toEqual(expected);
  });
})