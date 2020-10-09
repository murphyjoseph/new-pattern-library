import React, { FC } from "react";
import { IContainerLink } from './Container.interface';
import { cssDisplay } from '../../styles-typestyle/utility';
import { classes } from 'typestyle';
import { cssPadding, cssMargin, cssColorBackground } from '../../styles-typestyle/utility';

interface ITraits {
  traits: IContainerLink
}

export const ContainerLink: FC<ITraits> = ({
  traits,
  children
}) => {

  const { href: _href, target: _target, styles, colorBackground, padding, margin } = traits;

  const cssClasses = classes(
    !!colorBackground && cssColorBackground(colorBackground),
    !!padding && cssPadding(padding),
    !!margin && cssMargin(margin),
    !!styles && styles,
    cssDisplay('block')
  )

  const optionalAttributes: React.HTMLProps<HTMLAnchorElement> = {
    ...(!!_target && { target: _target })
  };

  return (
    <a  className={cssClasses}
        href={_href}
        {...optionalAttributes}>
      {children}
    </a>
  )
}