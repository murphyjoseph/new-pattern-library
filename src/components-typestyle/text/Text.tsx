import React, { FC } from "react";

import { IText } from './Text.interface';
import { cssText, cssTextVariant, cssTextStyle } from './_cssText';
import { styleTextAlignment } from '../../styles-typestyle/alignment';
import { cssColorBackground, cssColorText } from '../../styles-typestyle/utility';
import { style, classes as combineClasses } from 'typestyle';
import { styleColorText, styleColorBackground } from '../../styles-typestyle/color';

interface ITraits {
  traits: IText;
}

export const Text: FC<ITraits> = ({ traits }) => {

  const { tag: _tag, variant, text, title, isItalic, isCrossedOut, isUnderlined, textAlignment, stylesExternal, colorText, colorBackground } = traits
  const Tag: keyof JSX.IntrinsicElements = !!_tag ? _tag : "span"

  const stylesCore = style({
    $debugName: 'Text',
    ...cssTextVariant[variant],
    ...!!colorText && styleColorText(colorText),
    ...!!colorBackground && styleColorBackground(colorBackground),
    ...!!isItalic && cssTextStyle.italic,
    ...!!isCrossedOut && cssTextStyle.crossedOut,
    ...!!isUnderlined && cssTextStyle.underlined,
    ...!!textAlignment && styleTextAlignment(textAlignment),
    ...!!stylesExternal && stylesExternal
  })

  return (
    <Tag className={combineClasses(stylesCore, 'kitter_text')}>
      { text }
    </Tag>
  )
}


