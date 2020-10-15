import React, { FC } from "react";

import { IContainer } from './Container.interface';
import { style } from 'typestyle';
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

  const { padding, margin, styleExternal, colorBackground } = traits;

  const stylesCore = style(
    !!padding         && mixinPadding(padding),
    !!margin          && mixinMargin(margin),
    !!colorBackground && mixinColorBackground(colorBackground),
    !!styleExternal   && styleExternal
  )

  return (
    <div className={stylesCore}>
      { children }
    </div>
  )
}