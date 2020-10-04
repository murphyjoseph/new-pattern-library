import React, { FC } from "react";

import { IText } from './text.interface';
import { cssText, cssTextVariant, cssTextStyle } from './_css-text';
import { jsx } from '@emotion/core'
import { cssTextAlignment } from '../../styles-emotion/alignment';

interface ITraits {
  traits: IText;
}

export const Text: FC<ITraits> = ({ traits }) => {

  const { tag: _tag, variant, text, title, isItalic, isCrossedOut, isUnderlined, textAlignment, styles } = traits
  const Tag: keyof JSX.IntrinsicElements = !!_tag ? _tag : "span"

  const classes = {
    ...cssText.base,
    ...cssTextVariant[variant],
    ...!!isItalic && cssTextStyle.italic,
    ...!!isCrossedOut && cssTextStyle.crossedOut,
    ...!!isUnderlined && cssTextStyle.underlined,
    ...!!textAlignment && cssTextAlignment[textAlignment],
    ...!!styles && styles
  }

  return (
    <Tag css={classes}>
      { text }
    </Tag>
  )
}


