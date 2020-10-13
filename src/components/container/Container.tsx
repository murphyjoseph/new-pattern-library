import React, { FC } from "react";

import { IContainer } from './Container.interface';
import { style, classes as combineClasses } from 'typestyle';
import { mixinPadding } from "../../styles/mixinPadding";
import { mixinMargin } from '../../styles/mixinMargin';
import { mixinColorBackground } from '../../styles/mixinColor';

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
    ...!!colorBackground && mixinColorBackground(colorBackground),
    ...!!stylesExternal  && stylesExternal
  })

  return (
    <div className={combineClasses(stylesCore, 'kitter_container')}>
      { children }
    </div>
  )
}