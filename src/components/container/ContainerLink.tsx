import React, { FC } from "react";
import { IContainerLink } from './Container.interface';
import { cssDisplay } from '../../styles/utility';
import { classes, style } from 'typestyle';
import { cssPadding, cssMargin, cssColorBackground } from '../../styles/utility';
import { theme } from "../../theme";
import { mixinMargin } from '../../styles/mixinMargin';
import { mixinPadding } from "../../styles/mixinPadding";

interface ITraits {
  traits: IContainerLink
}

export const ContainerLink: FC<ITraits> = ({
  traits,
  children
}) => {

  const { href: _href, target: _target, display: _display, stylesExternal, colorBackground, padding, margin } = traits;

  const stylesCore = style({
    ...!!_display        && { display: _display },
    ...!!colorBackground && { background: theme.color[colorBackground] },
    ...!!padding         && mixinPadding(padding),
    ...!!margin          && mixinMargin(margin),
    ...!!stylesExternal  && stylesExternal
  })

  const optionalAttributes: React.HTMLProps<HTMLAnchorElement> = {
    ...(!!_target && { target: _target })
  };

  return (
    <a  className={stylesCore}
        href={_href}
        {...optionalAttributes}>
      {children}
    </a>
  )
}