import React, { FC } from "react";

import { IContainer } from './Container.interface';
import clsx from 'clsx';

interface ITraits {
  traits: IContainer;
}

export const Container: FC<ITraits> = ({
  traits,
  children
}) => {

  const { padding, margin, styles, colorBackground } = traits;

  const classes = clsx(
    !!padding && !Array.isArray(padding) && `css_padding_${padding.direction}_${padding.size}`,
    !!margin && !Array.isArray(margin) && `css_padding_${margin.direction}_${margin.size}`,
    'css_display_block',
    !!colorBackground && `css_color_background_${colorBackground}`,
    !!styles && styles,
  )

  return (
    <div className={classes}>
      {children}
    </div>
  )
}