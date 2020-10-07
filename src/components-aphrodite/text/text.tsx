import React, { FC } from "react";

import { IText } from './Text.interface';
import { cssText, cssTextVariant, cssTextStyle } from './_cssText';
import { css } from "aphrodite";
import { cssTextAlignment } from '../../styles-aphrodite/alignment';
import { cssColorBackground, cssColorText } from "../../styles-aphrodite/color";

interface ITraits {
  traits: IText;
}

export const Text: FC<ITraits> = ({ traits }) => {

  const { tag: _tag, variant, text, title, isItalic, isCrossedOut, isUnderlined, textAlignment, colorText, colorBackground, styles } = traits
  const Tag: keyof JSX.IntrinsicElements = !!_tag ? _tag : "span"

  const classes = [
    cssText.base,
    cssTextVariant[variant],
    !!colorText && cssColorText[colorText],
    !!colorBackground && cssColorBackground[colorBackground],
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


