import { IStylesSpacing } from "../interfaces/styles.interface"
import { CONSTANTS } from '../constants';
import { theme } from "../theme";

export const mixinMargin: any = (params: IStylesSpacing | IStylesSpacing[]) => {
  // probably make it dynamic between padding or margin
  // add in support for breakpoints?
  if (Array.isArray(params)) return
  if (params.direction === CONSTANTS.label.direction.spacing.all) {
    return {

      marginTop: `${theme.size.spacing[params.size]}`,
      marginBottom: `${theme.size.spacing[params.size]}`,
      marginLeft: `${theme.size.spacing[params.size]}`,
      marginRight: `${theme.size.spacing[params.size]}`

    }
  } else if (params.direction === CONSTANTS.label.direction.spacing.vertical) {
    return {

      marginTop: `${theme.size.spacing[params.size]}`,
      marginBottom: `${theme.size.spacing[params.size]}`

    }
  } else if (params.direction === CONSTANTS.label.direction.spacing.horizontal) {
    return {

      marginLeft: `${theme.size.spacing[params.size]}`,
      marginRight: `${theme.size.spacing[params.size]}`

    }
  } else if (params.direction === CONSTANTS.label.direction.spacing.right) {
    return {

      marginRight: `${theme.size.spacing[params.size]}`

    }
  } else if (params.direction === CONSTANTS.label.direction.spacing.left) {
    return {

      marginLeft: `${theme.size.spacing[params.size]}`

    }
  } else if (params.direction === CONSTANTS.label.direction.spacing.top) {
    return {

      marginTop: `${theme.size.spacing[params.size]}`

    }
  } else if (params.direction === CONSTANTS.label.direction.spacing.bottom) {
    return {

      marginBottom: `${theme.size.spacing[params.size]}`

    }
  }
}
