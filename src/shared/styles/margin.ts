import { isArray } from "util"
import { IStylesSpacing } from "../../../interfaces/styles.interface"
import { mapLabels } from "../map-labels"
import { mapSizes } from "../map-sizes"

export const styleMargin: any = (params: IStylesSpacing | IStylesSpacing[]) => {
  // probably make it dynamic between padding or margin
  // add in support for breakpoints?
  if (isArray(params)) return
  if (!params.size) params.size = "size1"
  if (!params.direction) params.direction = "all"
  if (params.direction === mapLabels.directions.spacing.all) {
    return {

        marginTop: `${mapSizes.spacing[params.size]}${mapSizes.spacing.unitOfMeasurement}`,
        marginBottom: `${mapSizes.spacing[params.size]}${mapSizes.spacing.unitOfMeasurement}`,
        marginLeft: `${mapSizes.spacing[params.size]}${mapSizes.spacing.unitOfMeasurement}`,
        marginRight: `${mapSizes.spacing[params.size]}${mapSizes.spacing.unitOfMeasurement}`

    }
  } else if (params.direction === mapLabels.directions.spacing.vertical) {
    return {

        marginTop: `${mapSizes.spacing[params.size]}${mapSizes.spacing.unitOfMeasurement}`,
        marginBottom: `${mapSizes.spacing[params.size]}${mapSizes.spacing.unitOfMeasurement}`

    }
  } else if (params.direction = mapLabels.directions.spacing.horizontal) {
    return {

        marginLeft: `${mapSizes.spacing[params.size]}${mapSizes.spacing.unitOfMeasurement}`,
        marginRight: `${mapSizes.spacing[params.size]}${mapSizes.spacing.unitOfMeasurement}`

    }
  } else if (params.direction === mapLabels.directions.spacing.right) {
    return {

        marginRight: `${mapSizes.spacing[params.size]}${mapSizes.spacing.unitOfMeasurement}`

    }
  } else if (params.direction === mapLabels.directions.spacing.left) {
    return {

        marginLeft: `${mapSizes.spacing[params.size]}${mapSizes.spacing.unitOfMeasurement}`

    }
  } else if (params.direction === mapLabels.directions.spacing.top) {
    return {

        marginTop: `${mapSizes.spacing[params.size]}${mapSizes.spacing.unitOfMeasurement}`

    }
  } else if (params.direction === mapLabels.directions.spacing.bottom) {
    return {

        marginBottom: `${mapSizes.spacing[params.size]}${mapSizes.spacing.unitOfMeasurement}`

    }
  }
}
