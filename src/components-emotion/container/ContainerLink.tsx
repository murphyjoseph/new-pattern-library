/* @jsx jsx */  import { jsx } from '@emotion/core'

import React, { FC } from "react";
import { IContainerLink } from './Container.interface';
import { cssDisplay } from '../../styles-emotion/display';
import { cssColorBackground } from '../../styles-emotion/color';

interface ITraits {
  traits: IContainerLink
}

export const ContainerLink: FC<ITraits> = ({
  traits,
  children
}) => {

  const { href: _href, target: _target, styles, colorBackground } = traits;

  const classes = {
    ...!!colorBackground && cssColorBackground[colorBackground],
    ...cssDisplay.block,
    ...!!styles && styles
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