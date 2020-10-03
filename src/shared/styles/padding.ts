import { TLabelsSpacing, mapLabels } from '../map-labels';
import { mapSizes } from '../map-sizes';
import { TDirectionSpacing } from '../../../types/util-types';
import { IStylesSpacing } from '../../../interfaces/styles.interface';
import { isArray } from 'lodash';

interface IStylesSpacingJS {
  direction?: TDirectionSpacing,
  size?: TLabelsSpacing
}

export const stylePadding: any = (params: IStylesSpacing | IStylesSpacing[]) => {
  // probably make it dynamic between padding or margin
  // add in support for breakpoints?
  if (isArray(params)) return
  if (!params.size) params.size = "size1"
  if (!params.direction) params.direction = "all"
  if (params.direction === mapLabels.directions.spacing.all) {
    return {

        paddingTop: `${mapSizes.spacing[params.size]}${mapSizes.spacing.unitOfMeasurement}`,
        paddingBottom: `${mapSizes.spacing[params.size]}${mapSizes.spacing.unitOfMeasurement}`,
        paddingLeft: `${mapSizes.spacing[params.size]}${mapSizes.spacing.unitOfMeasurement}`,
        paddingRight: `${mapSizes.spacing[params.size]}${mapSizes.spacing.unitOfMeasurement}`

    }
  } else if (params.direction === mapLabels.directions.spacing.vertical) {
    return {

        paddingTop: `${mapSizes.spacing[params.size]}${mapSizes.spacing.unitOfMeasurement}`,
        paddingBottom: `${mapSizes.spacing[params.size]}${mapSizes.spacing.unitOfMeasurement}`

    }
  } else if (params.direction = mapLabels.directions.spacing.horizontal) {
    return {

        paddingLeft: `${mapSizes.spacing[params.size]}${mapSizes.spacing.unitOfMeasurement}`,
        paddingRight: `${mapSizes.spacing[params.size]}${mapSizes.spacing.unitOfMeasurement}`

    }
  } else if (params.direction === mapLabels.directions.spacing.right) {
    return {

        paddingRight: `${mapSizes.spacing[params.size]}${mapSizes.spacing.unitOfMeasurement}`

    }
  } else if (params.direction === mapLabels.directions.spacing.left) {
    return {

        paddingLeft: `${mapSizes.spacing[params.size]}${mapSizes.spacing.unitOfMeasurement}`

    }
  } else if (params.direction === mapLabels.directions.spacing.top) {
    return {

        paddingTop: `${mapSizes.spacing[params.size]}${mapSizes.spacing.unitOfMeasurement}`

    }
  } else if (params.direction === mapLabels.directions.spacing.bottom) {
    return {

        paddingBottom: `${mapSizes.spacing[params.size]}${mapSizes.spacing.unitOfMeasurement}`

    }
  }
}


