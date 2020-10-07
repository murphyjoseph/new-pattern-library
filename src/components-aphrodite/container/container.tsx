import React, { FC } from "react";

import { IContainer } from './Container.interface';
// import { stylePadding, stylerAttributeAndClassSetup } from "../../shared/services/styler";
import { stylePadding } from '../../styles-aphrodite/padding';
import { css } from 'aphrodite';
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

  const classes = [

    (!!padding && !!margin && {
      spacing: {
        ...!!padding && stylePadding(padding),
        ...!!margin && styleMargin(margin),
      }
    }),
    cssDisplay.block,
    !!colorBackground && cssColorBackground[colorBackground],
    ...!!styles && styles
  ]

  return (
    <div className={css(classes)}>
      {children}
    </div>
  )
}