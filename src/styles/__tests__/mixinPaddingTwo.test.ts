import { mixinPadding } from "../mixinPaddingTwo";

describe('#mixinPadding', () => {
  let padding;
  let expected;
  beforeEach(() => {
    padding = {
      size: 'size2',
      direction: 'none',
    };
    expected = {
      paddingTop: '0.43em',
      paddingBottom: '0.43em',
      paddingLeft: '0.43em',
      paddingRight: '0.43em',
    }
  });
  it('should apply padding in all directions', () => {
    padding.direction = 'all';
    const actual = mixinPadding(padding);
    expect(actual).toEqual(expected);
  });
  it('should apply bottom padding', () => {
    padding.direction = 'bottom';
    delete expected.paddingTop;
    delete expected.paddingLeft;
    delete expected.paddingRight;
    const actual = mixinPadding(padding);
    expect(actual).toEqual(expected);
  });
  it('should apply horizontal padding', () => {
    padding.direction = 'horizontal';
    delete expected.paddingTop;
    delete expected.paddingBottom;
    const actual = mixinPadding(padding);
    expect(actual).toEqual(expected);
  });
  it('should apply left padding', () => {
    padding.direction = 'left';
    delete expected.paddingTop;
    delete expected.paddingBottom;
    delete expected.paddingRight;
    const actual = mixinPadding(padding);
    expect(actual).toEqual(expected);
  });
  it('should apply right padding', () => {
    padding.direction = 'right';
    delete expected.paddingTop;
    delete expected.paddingBottom;
    delete expected.paddingLeft;
    const actual = mixinPadding(padding);
    expect(actual).toEqual(expected);
  });
  it('should apply top padding', () => {
    padding.direction = 'top';
    delete expected.paddingBottom;
    delete expected.paddingLeft;
    delete expected.paddingRight;
    const actual = mixinPadding(padding);
    expect(actual).toEqual(expected);
  });
  it('should apply vertical padding', () => {
    padding.direction = 'vertical';
    delete expected.paddingLeft;
    delete expected.paddingRight;
    const actual = mixinPadding(padding);
    expect(actual).toEqual(expected);
  });
});