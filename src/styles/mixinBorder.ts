import { theme } from '../theme';
import { TLabelSize, TColors } from '../types/util-types';

export const mixinBorder = (width: TLabelSize, color: TColors) => (
  {
    borderWidth: width,
    borderColor: theme.color[color],
    borderStyle: 'solid'
  }
)