import { style } from 'typestyle';
import { IStylesSpacing } from '../interfaces/styles.interface';
import { mixinMargin } from './mixinMargin';
import { mixinPadding } from './mixinPadding';
import { TColor, TAlignText, TDisplaySettings } from '../types/util-types';
import { mixinColorBackground, mixinColorText } from './mixinColor';
import { mixinAlignText } from './mixinAlignText';
import { mixinDisplay } from './mixinDisplay';

export const cssPadding = (padding: IStylesSpacing) => style({
  ...!!padding && mixinPadding(padding),
})

export const cssMargin = (margin: IStylesSpacing) => style({
  ...!!margin && mixinMargin(margin)
})

export const cssColorBackground = (colorBackground: TColor) => style({
  ...!!colorBackground && mixinColorBackground(colorBackground)
})

export const cssColorText = (colorText: TColor) => style({
  ...!!colorText && mixinColorText(colorText)
})

export const cssAlignText = (alignment: TAlignText) => style({
  ...!!alignment && mixinAlignText(alignment)
})

export const cssDisplay = (display: TDisplaySettings) => style({
  ...!!display && mixinDisplay(display)
})

