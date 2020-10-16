import { isArray } from 'lodash';
import { IStylesSpacing } from '../interfaces/styles.interface';
import { CONSTANTS } from '../constants';
import { theme } from '../theme';

const { label: { direction: DIRECTION } } = CONSTANTS;

export const mixinPadding: any = (params: IStylesSpacing | IStylesSpacing[]) => {
  if (isArray(params)) return;
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