import { IStylesSpacing } from '../interfaces/styles.interface';
import { isArray } from 'lodash';
import { theme } from '../theme';
import { CONSTANTS } from '../constants';
import { padding } from 'csstips';

export const mixinPadding: any = (params: IStylesSpacing | IStylesSpacing[]) => {
  // probably make it dynamic between padding or margin
  // add in support for breakpoints?
  if (isArray(params)) return
  if (params.direction === CONSTANTS.label.direction.spacing.all) {
    return {

      paddingTop: `${theme.size.spacing[params.size]}`,
      paddingBottom: `${theme.size.spacing[params.size]}`,
      paddingLeft: `${theme.size.spacing[params.size]}`,
      paddingRight: `${theme.size.spacing[params.size]}`

    }
  } else if (params.direction === CONSTANTS.label.direction.spacing.vertical) {
    return {

      paddingTop: `${theme.size.spacing[params.size]}`,
      paddingBottom: `${theme.size.spacing[params.size]}`

    }
  } else if (params.direction === CONSTANTS.label.direction.spacing.horizontal) {
    return {

      paddingLeft: `${theme.size.spacing[params.size]}`,
      paddingRight: `${theme.size.spacing[params.size]}`

    }
  } else if (params.direction === CONSTANTS.label.direction.spacing.right) {
    return {

      paddingRight: `${theme.size.spacing[params.size]}`

    }
  } else if (params.direction === CONSTANTS.label.direction.spacing.left) {
    return {

      paddingLeft: `${theme.size.spacing[params.size]}`

    }
  } else if (params.direction === CONSTANTS.label.direction.spacing.top) {
    return {

      paddingTop: `${theme.size.spacing[params.size]}`

    }
  } else if (params.direction === CONSTANTS.label.direction.spacing.bottom) {
    return {

      paddingBottom: `${theme.size.spacing[params.size]}`

    }
  }
}

export const getPadding: any = (params: IStylesSpacing) => {
  if (params.direction === CONSTANTS.label.direction.spacing.all) {
    return {

      paddingTop: `${theme.size.spacing[params.size]}`,
      paddingBottom: `${theme.size.spacing[params.size]}`,
      paddingLeft: `${theme.size.spacing[params.size]}`,
      paddingRight: `${theme.size.spacing[params.size]}`

    }
  } else if (params.direction === CONSTANTS.label.direction.spacing.vertical) {
    return {

      paddingTop: `${theme.size.spacing[params.size]}`,
      paddingBottom: `${theme.size.spacing[params.size]}`

    }
  } else if (params.direction === CONSTANTS.label.direction.spacing.horizontal) {
    return {

      paddingLeft: `${theme.size.spacing[params.size]}`,
      paddingRight: `${theme.size.spacing[params.size]}`

    }
  } else if (params.direction === CONSTANTS.label.direction.spacing.right) {
    return {

      paddingRight: `${theme.size.spacing[params.size]}`

    }
  } else if (params.direction === CONSTANTS.label.direction.spacing.left) {
    return {

      paddingLeft: `${theme.size.spacing[params.size]}`

    }
  } else if (params.direction === CONSTANTS.label.direction.spacing.top) {
    return {

      paddingTop: `${theme.size.spacing[params.size]}`

    }
  } else if (params.direction === CONSTANTS.label.direction.spacing.bottom) {
    return {

      paddingBottom: `${theme.size.spacing[params.size]}`

    }
  }
}

export const MixinPadding = (params: IStylesSpacing | IStylesSpacing[]) => {
  // if (isArray(params)) return
  if (Array.isArray(params)) {
    let paddingarray: any = []
    params.forEach(padding => {
      if (padding.breakpointDirection && padding.breakpointName) {
        const key: string = `@media all and (min-width: ${theme.breakpoint[padding.breakpointName]})`;
        paddingarray.push({[key]: { ...getPadding(padding) }})
      } else {
        paddingarray.push(getPadding(padding))
      }
    })
    return paddingarray
  } else {
    return {
      ...getPadding({...params})
    }

  }

}


