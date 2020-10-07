import React, { FC } from "react";
import { css } from "aphrodite";
import { IContainerLink } from './Container.interface';
import { cssDisplay } from '../../styles-aphrodite/display';
import { cssColorBackground } from "../../styles-aphrodite/color";

interface ITraits {
  traits: IContainerLink
}

export const ContainerLink: FC<ITraits> = ({
  traits,
  children
}) => {

  const { href: _href, target: _target, styles, colorBackground } = traits;

  const classes = [
    cssDisplay.block,
    !!colorBackground && cssColorBackground[colorBackground],
    !!styles && styles
  ]

  const optionalAttributes: React.HTMLProps<HTMLAnchorElement> = {
    ...(!!_target && { target: _target })
  };

  return (
    <a  className={css(classes)}
        href={_href}
        {...optionalAttributes}>
      {children}
    </a>
  )
}