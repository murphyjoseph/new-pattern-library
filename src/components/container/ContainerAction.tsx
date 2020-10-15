import React, { FC } from "react";

import { IContainerAction } from './Container.interface';
import _isFunction from 'lodash/isFunction';
import { style } from 'typestyle';
import { mixinMargin } from "../../styles/mixinMargin";
import { mixinPadding } from "../../styles/mixinPadding";
import { mixinDisplay, mixinColorBackground } from '../../styles/mixinGeneral';

interface ITraits {
  traits: IContainerAction
}

export const ContainerAction: FC<ITraits> = ({
  traits,
  children
}) => {

  const { onClick: _onClick, padding, display: _display,
          margin, styleExternal, colorBackground } = traits;

  const stylesCore = style(
    !!_display        && mixinDisplay(_display),
    !!colorBackground && mixinColorBackground(colorBackground),
    !!padding         && mixinPadding(padding),
    !!margin          && mixinMargin(margin),
    !!styleExternal   && styleExternal
  )

  const handleClick = (event?: React.SyntheticEvent): void => {
    if (!_onClick) return
    if (_isFunction(_onClick)) _onClick(event);
  };

  return (
    <div className={stylesCore}
         onClick={handleClick}>
      { children }
    </div>
  )
};