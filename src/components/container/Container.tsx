import React, { FC } from "react";

import { IContainer } from './Container.interface';
import { cssDisplay } from '../../styles/utility';
import { cssColorBackground, cssMargin, cssPadding } from '../../styles/utility';
import { style, classes as combineClasses } from 'typestyle';
import { mixinPadding } from "../../styles/mixinPadding";
import { mixinMargin } from '../../styles/mixinMargin';
import { mixinColorBackground } from '../../styles/mixinColor';
import { themeCss } from "../../themeCss";
import { theme } from '../../theme';

interface ITraits {
  traits: IContainer;
}

export const Container: FC<ITraits> = ({
  traits,
  children
}) => {

  const { padding, margin, stylesExternal, colorBackground } = traits;

  const stylesCore = style({
    $debugName: "Container",
    ...!!padding         && mixinPadding(padding),
    ...!!margin          && mixinMargin(margin),
    // A
    ...!!colorBackground && mixinColorBackground(colorBackground),
    // B
    ...!!colorBackground && { background: theme.color[colorBackground] },
    ...!!stylesExternal  && stylesExternal
  })

  // const stylesCore = style(

  //   !!padding         && mixinPadding(padding),
  //   !!margin          && mixinMargin(margin),
  //   !!colorBackground && mixinColorBackground(colorBackground),
  //   !!stylesExternal  && stylesExternal
  // )

  return (
    <div className={stylesCore}>
      { children }
    </div>
  )
}