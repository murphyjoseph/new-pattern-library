import { TAlignText, THyphens } from '../types/util-types';
import { theme } from '../theme';
import { TLabelSize, TColor } from '../types/util-types';
import { TDisplaySettings } from '../types/util-types';

// centralizes imports for theming
// also useful for when we need to add prefixing
// http://shouldiprefix.com/

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

export const mixinDisplay = (display: TDisplaySettings) => (
  { display: display }
)

export const mixinCharacterWidth = (amount: number) => (
  { characterWidth: amount }
)

export const mixinAppearance = (setting: any) => (
  {
    '-webkit-appearance': setting,
    '-moz-appearance'   : setting,
    appearance          : setting
  }
)

export const mixinHyphens = (setting: THyphens) => (
  {
    '-webkit-hyphens': setting,
    '-moz-hyphens'   : setting,
    '-ms-hyphens'    : setting,
    hyphens          : setting
  }
)
