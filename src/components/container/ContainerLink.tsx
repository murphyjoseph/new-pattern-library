import React, { FC } from "react";

import { IContainerLink } from './Container.interface';
import { classes as combineClasses, style } from 'typestyle';
import { mixinMargin } from '../../styles/mixinMargin';
import { mixinPadding } from "../../styles/mixinPadding";
import { mixinColorBackground } from '../../styles/mixinColor';
import { mixinDisplay } from "../../styles/mixinDisplay";

interface ITraits {
  traits: IContainerLink
}

export const ContainerLink: FC<ITraits> = ({
  traits,
  children
}) => {

  const { href: _href, target: _target,
          display: _display, stylesExternal,
          colorBackground, padding, margin } = traits;

  const stylesCore = style({
    ...!!_display        && mixinDisplay(_display),
    ...!!colorBackground && mixinColorBackground(colorBackground),
    ...!!padding         && mixinPadding(padding),
    ...!!margin          && mixinMargin(margin),
    ...!!stylesExternal  && stylesExternal
  })

  const optionalAttributes: React.HTMLProps<HTMLAnchorElement> = {
    ...(!!_target && { target: _target })
  };

  return (
    <a  className={combineClasses(stylesCore, 'kitter_container')}
        href={_href}
        {...optionalAttributes}>
      {children}
    </a>
  )
}