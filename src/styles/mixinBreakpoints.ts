import { CONSTANTS } from '../constants';
import { theme } from '../theme';
import { TBreakpoints } from '../types/util-types';

const { label: { breakpoint: BREAKPOINT } } = CONSTANTS;
export const mixinBreakpoints = (breakpointDirection: string, breakpointName: TBreakpoints): string => {
  // used a switch just in case we need more like between two widths
  switch (breakpointDirection) {
    case BREAKPOINT.direction.over:
      return `@media all and (min-width: ${theme.breakpoint[breakpointName]})`;
    case BREAKPOINT.direction.under:
      // I think this is what this was intended to be but I'm not sure
      return `@media all and (max-width: ${theme.breakpoint[breakpointName]})`;
    default:
      return ''
  }

}