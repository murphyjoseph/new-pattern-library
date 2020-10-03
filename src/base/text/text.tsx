import React, { FC } from "react";

import { IText } from './text.interface';
import { cssText, cssTextVariant, cssTextStyle } from './_css-text';
import { css } from "aphrodite/no-important";

interface ITraits {
  traits: IText;
}

export const Text: FC<ITraits> = ({ traits }) => {

  const { tag: _tag, variant, text, title, ...remainder } = traits
  const Tag: keyof JSX.IntrinsicElements = !!_tag ? _tag : "span"

  const classes = [
    cssText.base,
    cssTextVariant[variant],
    !!remainder.isItalic && cssTextStyle.italic,
    !!remainder.isCrossedOut && cssTextStyle.crossedOut,
    !!remainder.isUnderlined && cssTextStyle.underlined,
    !!remainder.styles && remainder.styles
  ]

  return (
    <Tag className={css(classes)}>
      {
        text
      }
    </Tag>
  )
}


