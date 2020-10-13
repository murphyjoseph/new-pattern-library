import React, { FC } from "react";

import { IContainerAction } from './Container.interface';
import _isFunction from 'lodash/isFunction';
import { style, classes as combineClasses } from 'typestyle';
import { mixinMargin } from "../../styles/mixinMargin";
import { mixinPadding } from "../../styles/mixinPadding";

interface ITraits {
  traits: IContainerAction
}

export const ContainerAction: FC<ITraits> = ({
  traits,
  children
}) => {

  const { onClick: _onClick, padding, display: _display,
          margin, stylesExternal, colorBackground } = traits;

  const stylesCore = style({
    ...!!_display        && { display: _display },
    ...!!colorBackground && { background: colorBackground},
    ...!!padding         && mixinPadding(padding),
    ...!!margin          && mixinMargin(margin),
    ...!!stylesExternal  && stylesExternal
  })

  const handleClick = (event?: React.SyntheticEvent): void => {
    if (!_onClick) return
    if (_isFunction(_onClick)) _onClick(event);
  };

  return (
    <div className={combineClasses(stylesCore, 'kitter_container')}
         onClick={handleClick}>
      { children }
    </div>
  )
};