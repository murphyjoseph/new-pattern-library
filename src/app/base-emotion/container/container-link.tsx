/* @jsx jsx */  import { jsx } from '@emotion/core'

import React, { FC } from "react";
import { IContainerLink } from './container.interface';
import { cssDisplay } from '../../styles-emotion/display';

interface ITraits {
  traits: IContainerLink
}

export const ContainerLink: FC<ITraits> = ({
  traits,
  children
}) => {

  const { href: _href, target: _target, styles } = traits;

  const classes = {
    ...!!styles && styles,
    ...cssDisplay.block
  }

  const optionalAttributes: React.HTMLProps<HTMLAnchorElement> = {
    ...(!!_target && { target: _target })
  };

  return (
    <a  css={classes}
        href={_href}
        {...optionalAttributes}>
      {children}
    </a>
  )
}