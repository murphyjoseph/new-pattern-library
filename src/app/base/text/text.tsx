import React, { FC } from "react";

import { IText } from './text.interface';
import { cssText, cssTextVariant, cssTextStyle } from './_css-text';
import { css } from "aphrodite/no-important";
import { cssTextAlignment } from '../../styles/alignment';

interface ITraits {
  traits: IText;
}

export const Text: FC<ITraits> = ({ traits }) => {

  const { tag: _tag, variant, text, title, isItalic, isCrossedOut, isUnderlined, textAlignment, styles } = traits
  const Tag: keyof JSX.IntrinsicElements = !!_tag ? _tag : "span"

  const classes = [
    cssText.base,
    cssTextVariant[variant],
    !!isItalic && cssTextStyle.italic,
    !!isCrossedOut && cssTextStyle.crossedOut,
    !!isUnderlined && cssTextStyle.underlined,
    !!textAlignment && cssTextAlignment[textAlignment],
    !!styles && styles
  ]

  return (
    <Tag className={css(classes)}>
      { text }
    </Tag>
  )
}


