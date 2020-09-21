import { TMapLabels, TLabelsSpacing, mapLabels } from '../map-labels';
import { IStylesSpacing } from '../../../interfaces/styles.interface';
import jss from 'jss'
import { mapSizes } from '../map-sizes';
import { TSpacingDirections } from '../../../types/util-types';

interface IStylesSpacingJS {
  direction: TSpacingDirections,
  size: TLabelsSpacing
}

export const margin = (params: IStylesSpacingJS) => {
  if (!params.size) params.size = "size1"
  if (params.direction === mapLabels.directions.spacing.all) {
    return {
      margin: {
        top: `${mapSizes.spacing[params.size]}em`,
        bottom: `${mapSizes.spacing[params.size]}em`,
        left: `${mapSizes.spacing[params.size]}em`,
        right: `${mapSizes.spacing[params.size]}em`
      }
    }
  } else if (params.direction === mapLabels.directions.spacing.vertical) {
    return {
      margin: {
        top: `${mapSizes.spacing[params.size]}em`,
        bottom: `${mapSizes.spacing[params.size]}em`,
        left: 0,
        right: 0
      }
    }
  }
}