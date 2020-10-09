import React, { FC } from "react";

import { IContainer } from './Container.interface';
import { cssDisplay } from '../../styles-typestyle/utility';
import { cssColorBackground, cssMargin, cssPadding } from '../../styles-typestyle/utility';
import { style, classes as combineClasses } from 'typestyle';
import { stylePadding } from "../../styles-typestyle/padding";
import { styleMargin } from '../../styles-typestyle/margin';
import { styleColorBackground } from '../../styles-typestyle/color';

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
    ...!!padding && stylePadding(padding),
    ...!!margin && styleMargin(margin),
    ...!!colorBackground && styleColorBackground(colorBackground)
  })

  return (
    <div className={combineClasses(stylesCore, !!stylesExternal && stylesExternal)}>
      { children }
    </div>
  )
}