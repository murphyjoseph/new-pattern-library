import { mixinMargin } from "../mixinMargin";

describe('#mixinMargin', () => {
  describe('#simpleMarginMixin', () => {
    let margin;
    let expected;
    beforeEach(() => {
      margin = {
        size: 'size2',
        direction: 'none',
      };
      expected = {
        marginTop: '0.43em',
        marginBottom: '0.43em',
        marginLeft: '0.43em',
        marginRight: '0.43em',
      }
    });
    it('should apply margin in all directions', () => {
      margin.direction = 'all';
      const actual = mixinMargin(margin);
      expect(actual).toEqual(expected);
    });
    it('should apply bottom margin', () => {
      margin.direction = 'bottom';
      delete expected.marginTop;
      delete expected.marginLeft;
      delete expected.marginRight;
      const actual = mixinMargin(margin);
      expect(actual).toEqual(expected);
    });
    it('should apply horizontal margin', () => {
      margin.direction = 'horizontal';
      delete expected.marginTop;
      delete expected.marginBottom;
      const actual = mixinMargin(margin);
      expect(actual).toEqual(expected);
    });
    it('should apply left margin', () => {
      margin.direction = 'left';
      delete expected.marginTop;
      delete expected.marginBottom;
      delete expected.marginRight;
      const actual = mixinMargin(margin);
      expect(actual).toEqual(expected);
    });
    it('should apply right margin', () => {
      margin.direction = 'right';
      delete expected.marginTop;
      delete expected.marginBottom;
      delete expected.marginLeft;
      const actual = mixinMargin(margin);
      expect(actual).toEqual(expected);
    });
    it('should apply top margin', () => {
      margin.direction = 'top';
      delete expected.marginBottom;
      delete expected.marginLeft;
      delete expected.marginRight;
      const actual = mixinMargin(margin);
      expect(actual).toEqual(expected);
    });
    it('should apply vertical margin', () => {
      margin.direction = 'vertical';
      delete expected.marginLeft;
      delete expected.marginRight;
      const actual = mixinMargin(margin);
      expect(actual).toEqual(expected);
    });
  });
  describe('#mixinArrayMargin', () => {
    let margin;
    let expected;
    beforeEach(() => {
      margin = [
        { direction: "right", size: "size12" },
        { direction: "left", size: "size5", breakpointName: "breakpoint2", breakpointDirection: "over" }
      ];
      expected = {
        marginRight: '2.73em',
        '@media all and (min-width: 560px)': {
          marginLeft: '1.12em',
        }
      }
    });
    it('should apply right styles if given break point array', () => {
      const actual = mixinMargin(margin);
      expect(actual).toEqual(expected);
    });
  })
});

