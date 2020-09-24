import { mapLabels } from './map-labels';
import { mapGeneral } from './map-general';
import { TUnitOfMeasurement } from '../../types/util-types';

interface ISetSizesParams {
  multiplier: number,
  floor?: number,
  ceiling?: number,
  unitOfMeasurement: TUnitOfMeasurement
}

export const setSizes = (params: ISetSizesParams) => {
  console.log('SET SIZES');
  let {
    multiplier,
    floor,
    ceiling,
    unitOfMeasurement
  } = params

  const {
    sizes: LABEL_SIZES
  } = mapLabels

  const {
    size: {
      floor: SIZE_FLOOR,
      ceiling: SIZE_CEILING
    }
  } = mapGeneral

  let newSizeValues: any = {}
      newSizeValues.unitOfMeasurement =  unitOfMeasurement
  let sizeFloor: any = !!floor ? floor : SIZE_FLOOR
  let sizeCeiling: any = !!ceiling ? ceiling : SIZE_CEILING
  const sizeLabelLength = Object.values(LABEL_SIZES).length

  sizeFloor = sizeFloor * multiplier;
  sizeCeiling = sizeCeiling * multiplier;
  const sizeIncrement = (sizeCeiling - sizeFloor)/sizeLabelLength;
  let size = 0

  for (let key of Object.keys(LABEL_SIZES)) {

    // increment size or set to floor for initial value
    size = size === 0 ? sizeFloor : size + sizeIncrement;
    // round size to hundredth of em but to whole number if px or none
    if (unitOfMeasurement === "px" || unitOfMeasurement === "none") {
      size = Math.round( size )
    } else {
      size = Math.round( 100 * size )/ 100
    }

    Object.assign(newSizeValues, {[key]: size})
  }

  return newSizeValues

}