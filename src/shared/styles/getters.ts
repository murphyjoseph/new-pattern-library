import { TLabelSize, TColors } from '../types/util-types';
import { theme } from '../../theme';

export const getSizeSpacing = (size: TLabelSize) => {
  return `${theme.size.spacing[size]}${theme.size.spacing.unitOfMeasurement}`;
}

export const getSizeButton = (size: TLabelSize) => {
  return `${theme.size.button[size]}${theme.size.button.unitOfMeasurement}`
}

export const getColor = (color: TColors) => {
  return theme.colors[color]
}