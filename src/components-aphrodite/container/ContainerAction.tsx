import React, { FC } from "react";
import { IContainerAction } from './Container.interface';
import _isFunction from 'lodash/isFunction';
import { stylePadding } from '../../styles-aphrodite/padding';
import { css } from 'aphrodite/no-important';
import { styleMargin } from "../../styles-aphrodite/margin";
import { cssDisplay } from '../../styles-aphrodite/display';
import { cssColorBackground } from '../../styles-aphrodite/color';

interface ITraits {
  traits: IContainerAction
}

export const ContainerAction: FC<ITraits> = ({
  traits,
  children
}) => {

  const { onClick: _onClick, padding, margin, styles, colorBackground } = traits;

  const classes = [
    ...!!padding && stylePadding(padding),
    ...!!margin && styleMargin(margin),
    cssDisplay.block,
    !!colorBackground && cssColorBackground[colorBackground],
    !!styles && styles,
  ]

  const handleClick = (event?: React.SyntheticEvent): void => {
    if (!_onClick) return
    if (_isFunction(_onClick)) _onClick(event);
  };

  return (
    <div className={css(classes)}
         onClick={handleClick}>
      {children}
    </div>
  )
};