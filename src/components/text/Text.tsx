import React, { FC } from "react";

import { IText } from './Text.interface';
import { cssText, cssTextVariant, cssTextStyle } from './_cssText';
import { mixinAlignText } from '../../styles/mixinAlignText';
import { cssColorBackground, cssColorText } from '../../styles/utility';
import { style, classes as combineClasses } from 'typestyle';
import { mixinColorText, mixinColorBackground } from '../../styles/mixinColor';

interface ITraits {
  traits: IText;
}

export const Text: FC<ITraits> = ({ traits }) => {

  const { tag: _tag, id: _id, title: _title,
          variant, text, isItalic, isCrossedOut,
          isUnderlined, textAlignment, stylesExternal,
          colorText, colorBackground } = traits

  const Tag: keyof JSX.IntrinsicElements = !!_tag ? _tag : "span"

  const stylesCore = style({
    $debugName: 'Text',
    ...cssTextVariant[variant],
    ...!!colorText       && { color: colorText },
    ...!!colorBackground && { background: colorBackground },
    ...!!textAlignment   && { textAlign: textAlignment },
    ...!!isItalic        && cssTextStyle.italic,
    ...!!isCrossedOut    && cssTextStyle.crossedOut,
    ...!!isUnderlined    && cssTextStyle.underlined,
    ...!!stylesExternal  && stylesExternal
  })

  const optionalAttributes: any = {
    ...(!!_id    && { id: _id }),
    ...(!!_title && { title: _title })
  };

  return (
    <Tag className={combineClasses(stylesCore, 'kitter_text')}
         {...optionalAttributes}>
      { text }
    </Tag>
  )
}