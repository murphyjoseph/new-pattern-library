import React, { FC } from "react";
import { IContainerAction } from './Container.interface';
import _isFunction from 'lodash/isFunction';
import { stylePadding } from '../../styles-aphrodite/padding';
import { css } from 'aphrodite';
import { styleMargin } from "../../styles-aphrodite/margin";
import { cssDisplay } from '../../styles-aphrodite/display';
import { cssColorBackground } from '../../styles-aphrodite/color';
import clsx from 'clsx';

interface ITraits {
  traits: IContainerAction
}

export const ContainerAction: FC<ITraits> = ({
  traits,
  children
}) => {

  const { onClick: _onClick, padding, margin, styles, colorBackground } = traits;

  const classes = clsx(
    !!padding && !Array.isArray(padding) && `css_padding_${padding.direction}_${padding.size}`,
    !!margin && !Array.isArray(margin) && `css_padding_${margin.direction}_${margin.size}`,
    'css_display_block',
    !!colorBackground && `css_color_background_${colorBackground}`,
    !!styles && styles,
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