/* @jsx jsx */  import { jsx } from '@emotion/core'
import React, { FC } from "react";

import { IContainer } from './container.interface';
import { stylePadding } from '../../styles-emotion/padding';
import { styleMargin } from "../../styles-emotion/margin";
import { cssDisplay } from '../../styles-emotion/display';

interface ITraits {
  traits: IContainer;
}

export const Container: FC<ITraits> = ({
  traits,
  children
}) => {

  const { padding, margin, styles } = traits;

  const classes = {
    ...!!padding && stylePadding(padding),
    ...!!margin && styleMargin(margin),
    ...cssDisplay.block,
    ...!!styles && styles
  }

  return (
    <div css={classes}>
      {children}
    </div>
  )
}