import { TAlignText } from '../types/util-types';
import { theme } from '../theme';
import { TLabelSize, TColors } from '../types/util-types';
import { TDisplaySettings } from '../types/util-types';

export const mixinAlignText = (alignment: TAlignText) => (
  { textAlign: alignment }
)

export const mixinBorder = (width: TLabelSize, color: TColors) => (
  {
    borderWidth: width,
    borderColor: theme.color[color],
    borderStyle: 'solid'
  }
)

export const mixinColorText = (color: TColors) => (
  { color: theme.color[color] }
)

export const mixinColorBackground = (color: TColors) => (
  { background: theme.color[color] }
)

export const mixinDisplay = (display: TDisplaySettings) => {
  return { display: display }
}