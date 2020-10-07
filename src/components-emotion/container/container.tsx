/* @jsx jsx */  import { jsx } from '@emotion/core'
import React, { FC } from "react";

import { IContainer } from './Container.interface';
import { stylePadding } from '../../styles-emotion/padding';
import { styleMargin } from "../../styles-emotion/margin";
import { cssDisplay } from '../../styles-emotion/display';
import { cssColorBackground } from '../../styles-emotion/color';

interface ITraits {
  traits: IContainer;
}

export const Container: FC<ITraits> = ({
  traits,
  children
}) => {

  const { padding, margin, styles, colorBackground } = traits;

  const classes = {
    ...!!padding && stylePadding(padding),
    ...!!margin && styleMargin(margin),
    ...!!colorBackground && cssColorBackground[colorBackground],
    ...cssDisplay.block,
    ...!!styles && styles
  }

  return (
    <div css={classes}>
      {children}
    </div>
  )
}