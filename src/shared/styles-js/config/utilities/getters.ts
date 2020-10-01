import { TSizeLabels, TColors } from '../../../types/util-types';
import { SIZES } from '../map-sizes';
import { mapColors } from '../map-colors';

export const getSizeSpacing = (size: TSizeLabels) => {
  return `${SIZES.spacing[size]}${SIZES.spacing.unitOfMeasurement}`;
}

export const getSizeButton = (size: TSizeLabels) => {
  return `${SIZES.button[size]}${SIZES.button.unitOfMeasurement}`
}

export const getColor = (color: TColors) => {
  return mapColors[color]
}