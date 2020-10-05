/* @jsx jsx */  import { jsx } from '@emotion/core'
import React, { FC } from "react";

import { IText } from './Text.interface';
import { cssText, cssTextVariant, cssTextStyle } from './_cssText';
import { cssTextAlignment } from '../../styles-emotion/alignment';
import { withStyles } from '../../ThemeProvider';

interface ITraits {
  traits: IText;
  styles?: any;
}

export const textComp: FC<ITraits> = ({ traits, styles }) => {
  const {
    tag: _tag,
    variant,
    text,
    title,
    isItalic,
    isCrossedOut,
    isUnderlined,
    textAlignment,
  } = traits;
  const Tag: keyof JSX.IntrinsicElements = !!_tag ? _tag : "span"

  const classes = {
    ...styles.base,
    ...styles[variant],
    ...!!isItalic && styles.italic,
    ...!!isCrossedOut && styles.crossedOut,
    ...!!isUnderlined && styles.underlined,
    ...!!textAlignment && cssTextAlignment[textAlignment],
    // ...!!styles && styles
  }

  return (
    <Tag css={classes}>
      { text}
    </Tag>
  )
};

export const Text: FC<ITraits> = withStyles(cssText, cssTextVariant, cssTextStyle)(textComp);


