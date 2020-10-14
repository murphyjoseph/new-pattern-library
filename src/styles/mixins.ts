import { TAlignText } from '../types/util-types';
import { theme } from '../theme';
import { TLabelSize, TColor } from '../types/util-types';
import { TDisplaySettings } from '../types/util-types';

export const mixinAlignText = (alignment: TAlignText) => (
  { textAlign: alignment }
)

export const mixinBorder = (width: TLabelSize, color: TColor) => (
  {
    borderWidth: width,
    borderColor: theme.color[color],
    borderStyle: 'solid'
  }
)

export const mixinColorText = (color: TColor) => (
  { color: theme.color[color] }
)

export const mixinColorBackground = (color: TColor) => (
  { background: theme.color[color] }
)

export const mixinDisplay = (display: TDisplaySettings) => {
  return { display: display }
}