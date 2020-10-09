import { style } from 'typestyle';
import { IStylesSpacing } from '../interfaces/styles.interface';
import { styleMargin } from './margin';
import { stylePadding } from './padding';
import { TColors, TAlignmentText, TDisplaySettings } from '../types/util-types';
import { styleColorBackground, styleColorText } from './color';
import { styleTextAlignment } from './alignment';
import { styleDisplay } from './display';

export const cssPadding = (padding: IStylesSpacing) => style({
  $debugName: 'utPadding',
  ...!!padding && stylePadding(padding),
})

export const cssMargin = (margin: IStylesSpacing) => style({
  $debugName: 'utMargin',
  ...!!margin && styleMargin(margin)
})

export const cssColorBackground = (colorBackground: TColors) => style({
  $debugName: 'utColorBackground',
  ...!!colorBackground && styleColorBackground(colorBackground)
})

export const cssColorText = (colorText: TColors) => style({
  $debugName: 'utColorText',
  ...!!colorText && styleColorText(colorText)
})

export const cssTextAlignment = (alignment: TAlignmentText) => style({
  $debugName: 'utAlignmentText',
  ...!!alignment && styleTextAlignment(alignment)
})

export const cssDisplay = (display: TDisplaySettings) => style({
  $debugName: 'utDisplay',
  ...!!display && styleDisplay(display)
})

