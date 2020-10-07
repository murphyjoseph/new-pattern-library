import React, { FC } from "react";
import { IContainerAction } from './Container.interface';
import _isFunction from 'lodash/isFunction';
import { stylePadding } from '../../styles-jss/padding';
import clsx from 'clsx'
import { styleMargin } from "../../styles-jss/margin";
import { cssDisplay } from '../../styles-jss/display';
import { cssColorBackground } from '../../styles-jss/color';

interface ITraits {
  traits: IContainerAction
}

export const ContainerAction: FC<ITraits> = ({
  traits,
  children
}) => {

  const { onClick: _onClick, padding, margin, styles, colorBackground } = traits;

  const classes = clsx(
    ...!!padding && stylePadding(padding),
    ...!!margin && styleMargin(margin),
    cssDisplay().block,
    !!colorBackground && cssColorBackground()[colorBackground],
    ...!!styles && styles(),
  )

  const handleClick = (event?: React.SyntheticEvent): void => {
    if (!_onClick) return
    if (_isFunction(_onClick)) _onClick(event);
  };

  return (
    <div className={classes}
         onClick={handleClick}>
      {children}
    </div>
  )
};