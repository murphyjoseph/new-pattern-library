/* @jsx jsx */  import { jsx } from '@emotion/core'
import React, { FC } from "react";

import { IText } from './Text.interface';
import { cssText, cssTextVariant, cssTextStyle } from './_cssText';
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

  console.log(classes)

  return (
    <Tag css={classes}>
      { text }
    </Tag>
  )
}


