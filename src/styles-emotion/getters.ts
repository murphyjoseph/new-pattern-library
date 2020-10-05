import { TLabelSize, TColors } from '../types/util-types';
import { themeCss } from '../themeCss';

export const getSizeSpacing = (size: TLabelSize) => {
  return `${themeCss.size.spacing[size]}${themeCss.size.spacing.unit}`;
}

export const getSizeButton = (size: TLabelSize) => {
  return `${themeCss.size.button[size]}${themeCss.size.button.unit}`
}

export const getColor = (color: TColors) => {
  return themeCss.colors[color]
}