import { theme } from '../theme';
import { TLabelSize, TColor } from '../types/util-types';

export const mixinBorder = (width: TLabelSize, color: TColor) => (
  {
    borderWidth: width,
    borderColor: theme.color[color],
    borderStyle: 'solid'
  }
)