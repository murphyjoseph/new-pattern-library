import { IStylesSpacing } from '../interfaces/styles.interface';
import { isArray } from 'lodash';
import { themeCss } from '../themeCss';
import { CONSTANTS } from '../constants';

export const stylePadding: any = (params: IStylesSpacing | IStylesSpacing[]) => {
  // probably make it dynamic between padding or margin
  // add in support for breakpoints?
  if (isArray(params)) return
  if (!params.size) params.size = "size1"
  if (!params.direction) params.direction = "all"
  if (params.direction === CONSTANTS.label.direction.spacing.all) {
    return {

      paddingTop: `${themeCss.size.spacing[params.size]}${themeCss.size.spacing.unit}`,
      paddingBottom: `${themeCss.size.spacing[params.size]}${themeCss.size.spacing.unit}`,
      paddingLeft: `${themeCss.size.spacing[params.size]}${themeCss.size.spacing.unit}`,
      paddingRight: `${themeCss.size.spacing[params.size]}${themeCss.size.spacing.unit}`

    }
  } else if (params.direction === CONSTANTS.label.direction.spacing.vertical) {
    return {

      paddingTop: `${themeCss.size.spacing[params.size]}${themeCss.size.spacing.unit}`,
      paddingBottom: `${themeCss.size.spacing[params.size]}${themeCss.size.spacing.unit}`

    }
  } else if (params.direction === CONSTANTS.label.direction.spacing.horizontal) {
    return {

      paddingLeft: `${themeCss.size.spacing[params.size]}${themeCss.size.spacing.unit}`,
      paddingRight: `${themeCss.size.spacing[params.size]}${themeCss.size.spacing.unit}`

    }
  } else if (params.direction === CONSTANTS.label.direction.spacing.right) {
    return {

      paddingRight: `${themeCss.size.spacing[params.size]}${themeCss.size.spacing.unit}`

    }
  } else if (params.direction === CONSTANTS.label.direction.spacing.left) {
    return {

      paddingLeft: `${themeCss.size.spacing[params.size]}${themeCss.size.spacing.unit}`

    }
  } else if (params.direction === CONSTANTS.label.direction.spacing.top) {
    return {

      paddingTop: `${themeCss.size.spacing[params.size]}${themeCss.size.spacing.unit}`

    }
  } else if (params.direction === CONSTANTS.label.direction.spacing.bottom) {
    return {

      paddingBottom: `${themeCss.size.spacing[params.size]}${themeCss.size.spacing.unit}`

    }
  }
}


