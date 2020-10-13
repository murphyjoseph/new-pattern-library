import React, { FC } from "react";

import { IText } from './Text.interface';
import { cssTextVariant, cssTextStyle } from './_cssText';
import { mixinAlignText } from '../../styles/mixinAlignText';
import { style, classes as combineClasses } from 'typestyle';
import { mixinColorText, mixinColorBackground } from '../../styles/mixinColor';
import { mixinDisplay } from '../../styles/mixinDisplay';

interface ITraits {
  traits: IText;
}

export const Text: FC<ITraits> = ({ traits }) => {

  const { tag: _tag, id: _id, title: _title,
          variant, text, isItalic, isCrossedOut,
          isUnderlined, textAlignment, stylesExternal,
          colorText, colorBackground, display: _display } = traits

  const Tag: keyof JSX.IntrinsicElements = !!_tag ? _tag : "span"

  const cssCore = style({
    $debugName: 'Text',
    ...cssTextVariant[variant],
    ...!!colorText       && mixinColorText(colorText),
    ...!!colorBackground && mixinColorBackground(colorBackground),
    ...!!textAlignment   && mixinAlignText(textAlignment),
    ...!!_display        && mixinDisplay(_display),
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
    <Tag
      className={combineClasses(cssCore, 'kitter_text')}
      {...optionalAttributes}
    >
      { text }
    </Tag>
  )
}