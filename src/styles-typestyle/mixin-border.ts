import { TLabelSize, TColors } from '../types/util-types';

export const mixinBorder = (width: TLabelSize, color: TColors) => (
  {
    borderWidth: width,
    borderColor: color,
    borderStyle: 'solid'
  }
)