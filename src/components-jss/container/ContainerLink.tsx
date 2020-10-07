import React, { FC } from "react";
import clsx from 'clsx'
import { IContainerLink } from './Container.interface';
import { cssDisplay } from '../../styles-jss/display';
import { cssColorBackground } from "../../styles-jss/color";

interface ITraits {
  traits: IContainerLink
}

export const ContainerLink: FC<ITraits> = ({
  traits,
  children
}) => {

  const { href: _href, target: _target, styles, colorBackground } = traits;

  const classes = clsx(
    cssDisplay().block,
    !!colorBackground && cssColorBackground()[colorBackground],
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