import React, { FC } from "react";

import { IContainer } from './container.interface';
// import { stylePadding, stylerAttributeAndClassSetup } from "../../shared/services/styler";
import { stylePadding } from '../../styles-aphrodite/padding';
import { StyleSheet, css } from 'aphrodite/no-important';
import { styleMargin } from "../../styles-aphrodite/margin";
import { cssDisplay } from '../../styles-aphrodite/display';

interface ITraits {
  traits: IContainer;
}

export const Container: FC<ITraits> = ({
  traits,
  children
}) => {

  const { padding, margin, styles } = traits;

  const classes = [

    (!!padding && !!margin && {
      spacing: {
        ...!!padding && stylePadding(padding),
        ...!!margin && styleMargin(margin),
      }
    }),
    cssDisplay.block,
    ...!!styles && styles
  ]

  return (
    <div className={css(classes)}>
      {children}
    </div>
  )
}