import React, { FC } from "react";

import { css, StyleSheet } from 'aphrodite/no-important';
import { IContainer } from './Container.interface';
import { stylePadding } from '../../styles-aphrodite/padding';
import { styleMargin } from "../../styles-aphrodite/margin";
import { cssDisplay } from '../../styles-aphrodite/display';
import { cssColorBackground } from "../../styles-aphrodite/color";

interface ITraits {
  traits: IContainer;
}

export const Container: FC<ITraits> = ({
  traits,
  children
}) => {

  const { padding, margin, styles, colorBackground } = traits;

  let cssPadding: any = {padding: undefined};
  let cssMargin: any = {margin: undefined};

  if (!!padding)
  cssPadding = StyleSheet.create({
    padding: {
      ...stylePadding(padding)
    }
  })

  if (!!margin)
  cssMargin = StyleSheet.create({
    margin: {
      ...styleMargin(margin)
    }
  })

  const classes = [
    !!cssMargin.margin && cssMargin.margin,
    !!cssPadding.padding && cssPadding.padding,
    cssDisplay.block,
    !!colorBackground && cssColorBackground[colorBackground],
    !!styles && styles
  ]

  return (
    <div className={css(classes)}>
      {children}
    </div>
  )
}