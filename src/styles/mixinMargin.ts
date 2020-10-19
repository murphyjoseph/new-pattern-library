import { IStylesSpacing } from '../interfaces/styles.interface';
import { CONSTANTS } from '../constants';
import { theme } from '../theme';
import { mixinBreakpoints } from './mixinBreakpoints';

const { label: { direction: DIRECTION } } = CONSTANTS;


// NOTE: I realize this is just a copy pasta but it is more clear as to how the 
// styles are being generated - you can read it easier
const mixinArrayMargin = (params: IStylesSpacing[]) => {
  let marginObject: any = {};
  params.forEach(param => {
    const { breakpointName, breakpointDirection } = param;
    if (breakpointName && breakpointDirection) {
      const query: string = mixinBreakpoints(breakpointDirection, breakpointName);
      marginObject = {
        ...marginObject,
        [query]: { ...mixinSimpleMargin(param) }
      };
    } else {
      marginObject = {
        ...marginObject,
        ...mixinSimpleMargin(param)
      };
    }
  });
  return marginObject;
}
const mixinSimpleMargin = (params: IStylesSpacing) => {
  const { direction, size } = params;

  switch (direction) {
    case DIRECTION.spacing.all:
      return {
        marginTop: `${theme.size.spacing[size]}`,
        marginBottom: `${theme.size.spacing[size]}`,
        marginLeft: `${theme.size.spacing[size]}`,
        marginRight: `${theme.size.spacing[size]}`
      }
    case DIRECTION.spacing.vertical:
      return {
        marginTop: `${theme.size.spacing[size]}`,
        marginBottom: `${theme.size.spacing[size]}`
      }
    case DIRECTION.spacing.horizontal:
      return {
        marginLeft: `${theme.size.spacing[size]}`,
        marginRight: `${theme.size.spacing[size]}`
      }
    case DIRECTION.spacing.left:
      return {
        marginLeft: `${theme.size.spacing[size]}`
      }
    case DIRECTION.spacing.right:
      return {
        marginRight: `${theme.size.spacing[size]}`
      }
    case DIRECTION.spacing.top:
      return {
        marginTop: `${theme.size.spacing[size]}`
      }
    case DIRECTION.spacing.bottom:
      return {
        marginBottom: `${theme.size.spacing[size]}`
      }
  }
}

export const mixinMargin = (params: IStylesSpacing | IStylesSpacing[]) => {
  if (Array.isArray(params)) return mixinArrayMargin(params);
  return mixinSimpleMargin(params);
}