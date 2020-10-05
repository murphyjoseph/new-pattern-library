import { IStylesSpacing } from '../interfaces/styles.interface';
import { isArray } from 'lodash';
import { theme } from '../../theme';
import { CONSTANTS } from '../../constants';

export const stylePadding: any = (params: IStylesSpacing | IStylesSpacing[]) => {
  // probably make it dynamic between padding or margin
  // add in support for breakpoints?
  if (isArray(params)) return
  if (!params.size) params.size = "size1"
  if (!params.direction) params.direction = "all"
  if (params.direction === CONSTANTS.label.direction.spacing.all) {
    return {

      paddingTop: `${theme.size.spacing[params.size]}${theme.size.spacing.unit}`,
      paddingBottom: `${theme.size.spacing[params.size]}${theme.size.spacing.unit}`,
      paddingLeft: `${theme.size.spacing[params.size]}${theme.size.spacing.unit}`,
      paddingRight: `${theme.size.spacing[params.size]}${theme.size.spacing.unit}`

    }
  } else if (params.direction === CONSTANTS.label.direction.spacing.vertical) {
    return {

      paddingTop: `${theme.size.spacing[params.size]}${theme.size.spacing.unit}`,
      paddingBottom: `${theme.size.spacing[params.size]}${theme.size.spacing.unit}`

    }
  } else if (params.direction === CONSTANTS.label.direction.spacing.horizontal) {
    return {

      paddingLeft: `${theme.size.spacing[params.size]}${theme.size.spacing.unit}`,
      paddingRight: `${theme.size.spacing[params.size]}${theme.size.spacing.unit}`

    }
  } else if (params.direction === CONSTANTS.label.direction.spacing.right) {
    return {

      paddingRight: `${theme.size.spacing[params.size]}${theme.size.spacing.unit}`

    }
  } else if (params.direction === CONSTANTS.label.direction.spacing.left) {
    return {

      paddingLeft: `${theme.size.spacing[params.size]}${theme.size.spacing.unit}`

    }
  } else if (params.direction === CONSTANTS.label.direction.spacing.top) {
    return {

      paddingTop: `${theme.size.spacing[params.size]}${theme.size.spacing.unit}`

    }
  } else if (params.direction === CONSTANTS.label.direction.spacing.bottom) {
    return {

      paddingBottom: `${theme.size.spacing[params.size]}${theme.size.spacing.unit}`

    }
  }
}


