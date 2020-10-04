import { isArray } from "util"
import { IStylesSpacing } from "../interfaces/styles.interface"
import { CONSTANTS } from '../../constants';
import { theme } from "../../theme";

export const styleMargin: any = (params: IStylesSpacing | IStylesSpacing[]) => {
  // probably make it dynamic between padding or margin
  // add in support for breakpoints?
  if (isArray(params)) return
  if (!params.size) params.size = "size1"
  if (!params.direction) params.direction = "all"
  if (params.direction === CONSTANTS.label.direction.spacing.all) {
    return {

      marginTop: `${theme.size.spacing[params.size]}${theme.size.spacing.unit}`,
      marginBottom: `${theme.size.spacing[params.size]}${theme.size.spacing.unit}`,
      marginLeft: `${theme.size.spacing[params.size]}${theme.size.spacing.unit}`,
      marginRight: `${theme.size.spacing[params.size]}${theme.size.spacing.unit}`

    }
  } else if (params.direction === CONSTANTS.label.direction.spacing.vertical) {
    return {

      marginTop: `${theme.size.spacing[params.size]}${theme.size.spacing.unit}`,
      marginBottom: `${theme.size.spacing[params.size]}${theme.size.spacing.unit}`

    }
  } else if (params.direction === CONSTANTS.label.direction.spacing.horizontal) {
    return {

      marginLeft: `${theme.size.spacing[params.size]}${theme.size.spacing.unit}`,
      marginRight: `${theme.size.spacing[params.size]}${theme.size.spacing.unit}`

    }
  } else if (params.direction === CONSTANTS.label.direction.spacing.right) {
    return {

      marginRight: `${theme.size.spacing[params.size]}${theme.size.spacing.unit}`

    }
  } else if (params.direction === CONSTANTS.label.direction.spacing.left) {
    return {

      marginLeft: `${theme.size.spacing[params.size]}${theme.size.spacing.unit}`

    }
  } else if (params.direction === CONSTANTS.label.direction.spacing.top) {
    return {

      marginTop: `${theme.size.spacing[params.size]}${theme.size.spacing.unit}`

    }
  } else if (params.direction === CONSTANTS.label.direction.spacing.bottom) {
    return {

      marginBottom: `${theme.size.spacing[params.size]}${theme.size.spacing.unit}`

    }
  }
}