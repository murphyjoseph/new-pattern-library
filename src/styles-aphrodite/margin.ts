import { isArray } from "util"
import { IStylesSpacing } from "../interfaces/styles.interface"
import { CONSTANTS } from '../constants';
import { themeCss } from "../themeCss";

export const styleMargin: any = (params: IStylesSpacing | IStylesSpacing[]) => {
  // probably make it dynamic between padding or margin
  // add in support for breakpoints?
  if (isArray(params)) return
  if (!params.size) params.size = "size1"
  if (!params.direction) params.direction = "all"
  if (params.direction === CONSTANTS.label.direction.spacing.all) {
    return {

      marginTop: `${themeCss.size.spacing[params.size]}${themeCss.size.spacing.unit}`,
      marginBottom: `${themeCss.size.spacing[params.size]}${themeCss.size.spacing.unit}`,
      marginLeft: `${themeCss.size.spacing[params.size]}${themeCss.size.spacing.unit}`,
      marginRight: `${themeCss.size.spacing[params.size]}${themeCss.size.spacing.unit}`

    }
  } else if (params.direction === CONSTANTS.label.direction.spacing.vertical) {
    return {

      marginTop: `${themeCss.size.spacing[params.size]}${themeCss.size.spacing.unit}`,
      marginBottom: `${themeCss.size.spacing[params.size]}${themeCss.size.spacing.unit}`

    }
  } else if (params.direction === CONSTANTS.label.direction.spacing.horizontal) {
    return {

      marginLeft: `${themeCss.size.spacing[params.size]}${themeCss.size.spacing.unit}`,
      marginRight: `${themeCss.size.spacing[params.size]}${themeCss.size.spacing.unit}`

    }
  } else if (params.direction === CONSTANTS.label.direction.spacing.right) {
    return {

      marginRight: `${themeCss.size.spacing[params.size]}${themeCss.size.spacing.unit}`

    }
  } else if (params.direction === CONSTANTS.label.direction.spacing.left) {
    return {

      marginLeft: `${themeCss.size.spacing[params.size]}${themeCss.size.spacing.unit}`

    }
  } else if (params.direction === CONSTANTS.label.direction.spacing.top) {
    return {

      marginTop: `${themeCss.size.spacing[params.size]}${themeCss.size.spacing.unit}`

    }
  } else if (params.direction === CONSTANTS.label.direction.spacing.bottom) {
    return {

      marginBottom: `${themeCss.size.spacing[params.size]}${themeCss.size.spacing.unit}`

    }
  }
}
