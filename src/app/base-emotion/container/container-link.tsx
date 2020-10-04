import React, { FC } from "react";
import { css } from "aphrodite/no-important";
import { IContainerLink } from './container.interface';
import { cssDisplay } from '../../styles-aphrodite/display';

interface ITraits {
  traits: IContainerLink
}

export const ContainerLink: FC<ITraits> = ({
  traits,
  children
}) => {

  const { href: _href, target: _target, styles } = traits;

  const classes = [
    !!styles && styles,
    cssDisplay.block
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