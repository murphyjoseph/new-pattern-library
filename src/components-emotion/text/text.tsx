/* @jsx jsx */  import { jsx } from '@emotion/core'
import React, { FC } from "react";

import { IText } from './Text.interface';
import { cssText, cssTextTP, cssTextVariant, cssTextVariantTP, cssTextStyle } from './_cssText';
import { cssTextAlignment } from '../../styles-emotion/alignment';
// import { withStyles } from '../../ThemeProvider';
import { cssColorBackground, cssColorText } from '../../styles-emotion/color';

interface ITraits {
  traits: IText;
  styles?: any;
}

export const Text: FC<ITraits> = ({ traits }) => {
  const {
    tag: _tag,
    variant,
    text,
    title,
    isItalic,
    isCrossedOut,
    isUnderlined,
    textAlignment,
    colorBackground,
  } = traits;
  const Tag: keyof JSX.IntrinsicElements = !!_tag ? _tag : "span";
    const classes = {
    ...cssText.base,
    ...cssTextVariant[variant],
    ...!!colorBackground && cssColorBackground[colorBackground],
    // ...!!isItalic && styles.italic,
    // ...!!isCrossedOut && styles.crossedOut,
    // ...!!isUnderlined && styles.underlined,
    ...!!textAlignment && cssTextAlignment[textAlignment],
  }
  return (
    <Tag css={classes}>
      { text}
    </Tag>
  )
}
// export const textComp: FC<ITraits> = ({ traits, styles }) => {
//   const {
//     tag: _tag,
//     variant,
//     text,
//     title,
//     isItalic,
//     isCrossedOut,
//     isUnderlined,
//     textAlignment,
//   } = traits;
//   const Tag: keyof JSX.IntrinsicElements = !!_tag ? _tag : "span"

//   const classes = {
//     ...styles.base,
//     ...styles[variant],
//     ...!!isItalic && styles.italic,
//     ...!!isCrossedOut && styles.crossedOut,
//     ...!!isUnderlined && styles.underlined,
//     ...!!textAlignment && cssTextAlignment[textAlignment],
//     // ...!!styles && styles
//   }

//   return (
//     <Tag css={classes}>
//       { text}
//     </Tag>
//   )
// };

// export const Text: FC<ITraits> = withStyles(cssTextTP, cssTextVariantTP, cssTextStyle)(textComp);


