import React, { FC } from "react";

import { IText } from './Text.interface';
import './_css-text.css';
import clsx from 'clsx';

interface ITraits {
  traits: IText;
}

export const Text: FC<ITraits> = ({ traits }) => {

  const { tag: _tag, variant, text, title, isItalic, isCrossedOut, isUnderlined, textAlignment, colorText, colorBackground, styles } = traits
  const Tag: keyof JSX.IntrinsicElements = !!_tag ? _tag : "span"

  const classes = clsx(
    'text_base',
    `text_${variant}`,
    !!colorText && `css_color_text_${colorText}`,
    !!colorBackground && `css_color_background_${colorBackground}`,
    !!isItalic && 'text_italic',
    !!isCrossedOut && 'text_crossedOut',
    !!isUnderlined && 'text_underlined',
    !!textAlignment && `css_text_alignment_${textAlignment}`,
    !!styles && styles
  )

  return (
    <Tag className={classes}>
      { text }
    </Tag>
  )
}


