import React, { FC } from "react";
import { IContainerLink } from './Container.interface';
import clsx from 'clsx';

interface ITraits {
  traits: IContainerLink
}

export const ContainerLink: FC<ITraits> = ({
  traits,
  children
}) => {

  const { href: _href, target: _target, styles, colorBackground } = traits;

  const classes = clsx(
    'css_display_block',
    !!colorBackground && `css_color_background_${colorBackground}`,
    !!styles && styles
  )

  const optionalAttributes: React.HTMLProps<HTMLAnchorElement> = {
    ...(!!_target && { target: _target })
  };

  return (
    <a  className={classes}
        href={_href}
        {...optionalAttributes}>
      {children}
    </a>
  )
}