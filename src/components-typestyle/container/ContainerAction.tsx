import React, { FC } from "react";
import { IContainerAction } from './Container.interface';
import _isFunction from 'lodash/isFunction';
import { cssDisplay } from '../../styles-typestyle/utility';
import { style, classes } from 'typestyle';
import { cssColorBackground, cssMargin, cssPadding } from '../../styles-typestyle/utility';

interface ITraits {
  traits: IContainerAction
}

export const ContainerAction: FC<ITraits> = ({
  traits,
  children
}) => {

  const { onClick: _onClick, padding, margin, styles, colorBackground } = traits;

  const cssClasses = classes(
    !!colorBackground && cssColorBackground(colorBackground),
    !!padding && cssPadding(padding),
    !!margin && cssMargin(margin),
    !!styles && styles,
    cssDisplay('block')
  )

  const handleClick = (event?: React.SyntheticEvent): void => {
    if (!_onClick) return
    if (_isFunction(_onClick)) _onClick(event);
  };

  return (
    <div className={cssClasses}
         onClick={handleClick}>
      { children }
    </div>
  )
};