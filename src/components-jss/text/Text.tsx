import React, { FC } from "react";

import { IText } from './Text.interface';
import { cssText, cssTextVariant, cssTextStyle } from './_cssText';
import clsx from 'clsx'
import { cssTextAlignment } from '../../styles-jss/alignment';
import { cssColorBackground, cssColorText } from "../../styles-jss/color";

interface ITraits {
  traits: IText;
}

export const Text: FC<ITraits> = ({ traits }) => {

  const { tag: _tag, variant, text, title, isItalic, isCrossedOut, isUnderlined, textAlignment, colorText, colorBackground, styles } = traits
  const Tag: keyof JSX.IntrinsicElements = !!_tag ? _tag : "span"

  const classes = clsx(
    cssText().base,
    cssTextVariant()[variant],
    !!colorText && cssColorText()[colorText],
    !!colorBackground && cssColorBackground()[colorBackground],
    !!isItalic && cssTextStyle().italic,
    !!isCrossedOut && cssTextStyle().crossedOut,
    !!isUnderlined && cssTextStyle().underlined,
    !!textAlignment && cssTextAlignment()[textAlignment],
    !!styles && styles()
  )

  return (
    <Tag className={classes}>
      { text }
    </Tag>
  )
}


