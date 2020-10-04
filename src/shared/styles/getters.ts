import { TLabelSize, TColors } from '../types/util-types';
import { theme } from '../../theme';

export const getSizeSpacing = (size: TLabelSize) => {
  return `${theme.size.spacing[size]}${theme.size.spacing.unit}`;
}

export const getSizeButton = (size: TLabelSize) => {
  return `${theme.size.button[size]}${theme.size.button.unit}`
}

export const getColor = (color: TColors) => {
  return theme.colors[color]
}