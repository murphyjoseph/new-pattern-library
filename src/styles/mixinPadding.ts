import { IStylesSpacing } from '../interfaces/styles.interface';
import { CONSTANTS } from '../constants';
import { theme } from '../theme';
import { mixinBreakpoints } from './mixinBreakpoints';

const { label: { direction: DIRECTION } } = CONSTANTS;

/**
 * Handles styles when given more than one padding object
 * Applies breakpoint styles along with normal padding styles
 * object in an array
 * @param params 
 */
const mixinArrayPadding = (params: IStylesSpacing[]) => {
  let paddingObject: any = {};
  params.forEach(param => {
    const { breakpointName, breakpointDirection } = param;
    if (breakpointName && breakpointDirection) {
      const query: string = mixinBreakpoints(breakpointDirection, breakpointName);
      paddingObject = {
        ...paddingObject,
        [query]: { ...mixinSimplePadding(param) }
      };
    } else {
      paddingObject = {
        ...paddingObject,
        ...mixinSimplePadding(param)
      };
    }
  });
  return paddingObject;
}

/**
 * Creates style object given a size and direction to apply
 * the padding
 * @param params 
 */
const mixinSimplePadding = (params: IStylesSpacing) => {
  const { direction, size } = params;

  switch (direction) {
    case DIRECTION.spacing.all:
      return {
        paddingTop: `${theme.size.spacing[size]}`,
        paddingBottom: `${theme.size.spacing[size]}`,
        paddingLeft: `${theme.size.spacing[size]}`,
        paddingRight: `${theme.size.spacing[size]}`
      }
    case DIRECTION.spacing.vertical:
      return {
        paddingTop: `${theme.size.spacing[size]}`,
        paddingBottom: `${theme.size.spacing[size]}`
      }
    case DIRECTION.spacing.horizontal:
      return {
        paddingLeft: `${theme.size.spacing[size]}`,
        paddingRight: `${theme.size.spacing[size]}`
      }
    case DIRECTION.spacing.left:
      return {
        paddingLeft: `${theme.size.spacing[size]}`
      }
    case DIRECTION.spacing.right:
      return {
        paddingRight: `${theme.size.spacing[size]}`
      }
    case DIRECTION.spacing.top:
      return {
        paddingTop: `${theme.size.spacing[size]}`
      }
    case DIRECTION.spacing.bottom:
      return {
        paddingBottom: `${theme.size.spacing[size]}`
      }
  }
}

export const mixinPadding = (params: IStylesSpacing | IStylesSpacing[]) => {
  if (Array.isArray(params)) return mixinArrayPadding(params);
  return mixinSimplePadding(params);
}